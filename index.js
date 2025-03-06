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

//Creating database
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

//Updating database
app.put("/person", async (req, res) => {
  const { id } = req.body;

  const personData = await Person.findByIdAndUpdate(id, {
    name: "BBBBB",
  });
  res.send(personData);
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
