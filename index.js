import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";

const PORT = 3000;

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const name = "Beereshkumar";
  const email = "bcbeereshkumar@gmail.com";
  res.render("index", { name, email });
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
