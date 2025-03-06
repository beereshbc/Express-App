import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";
import dotenv from "dotenv";
import connectDB from "./mongoDB.js";

dotenv.config();
const PORT = 3000;
const app = express();
app.use(express.json());

await connectDB();

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
