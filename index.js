import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";

const PORT = 3000;

const app = express();
app.use(express.json());

//form using by urlencoded with an example of name and email
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send("form recived");
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
