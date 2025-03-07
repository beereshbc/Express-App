import express from "express";
import "dotenv/config";

const PORT = 3000;
const app = express();

app.use(express.json());

//--Global error handling
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
//--Global error handling
process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);
});

//Synchronous error handling
app.get("/sync-err", (req, res, next) => {
  try {
    throw new Error("Synchronous error occured");
  } catch (error) {
    next(error);
  }
});

//Asynchronous error handling
app.get("/async-err", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Asynchronous error occured"));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.message);
  console.log(err.stack);
  res.status(500).json({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
