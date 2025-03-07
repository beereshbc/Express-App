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
  try {
    const { name, email, password } = req.body;

    const newPerson = new Person({
      name,
      email,
      password,
    });
    await newPerson.save();
    console.log(newPerson);
    res.send("Person Added successfully");
  } catch (error) {
    res.send(error.message);
  }
});

//Updating database
app.put("/person", async (req, res) => {
  const { id } = req.body;

  const personData = await Person.findByIdAndUpdate(id, {
    name: "BBBBB",
  });
  res.send(personData);
});

app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("Person is deleted successfully");
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
