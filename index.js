import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";
import "dotenv/config";
import cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "express-app", { maxAge: 36000 });
  res.send("Hello Beeresh");
});

//Manual method of removing cookies
app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie Cleared");
});

app.get("/fetch", (req, res) => {
  console.log(req.cookies);
  res.send("API Called");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
