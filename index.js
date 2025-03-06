import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";
import "dotenv/config";
import connectDB from "./mongoDB.js";
import { Person } from "./models/Person.js";

const PORT = 3000;
const app = express();
app.use(express.json());

await connectDB();

app.post("/person", async (req, res) => {
  const { name, email, password } = req.body;
  res.send("Person Added successfully");

  const newPerson = new Person({
    name,
    email,
    password,
  });
  await newPerson.save();
  console.log(newPerson);
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
