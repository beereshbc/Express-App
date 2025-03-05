import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.use("/user", router);

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.send({
    message: `The user ${name} with Email ${email} is created succcessfully`,
  });
});

app.put("/users/:uid", (req, res) => {
  const userId = req.params.uid;
  const { name, email } = req.body;
  res.json({
    message: `The user ${userId} is update is details as ${name} and ${email}`,
  });
});

app.delete("/users/:uid", (req, res) => {
  const userId = req.params.uid;
  res.json({ message: `The user ${userId} is deleted successufully` });
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
