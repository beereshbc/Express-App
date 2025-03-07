import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const PORT = 3000;
const app = express();

app.use(express.json());
const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    username,
    password: hashedPassword,
  });
  res.send("User Registered successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.send("Unathorized access");
  }

  const token = jwt.sign({ username }, "test#123");
  res.json({ token });
});

app.get("/dashboard", (req, res) => {
  const token = req.header("token");
  const decodedToken = jwt.verify(token, "test#123");

  if (decodedToken.username) {
    res.send(`Welcome, ${decodedToken.username}`);
  } else {
    res.send("Access Denied");
  }
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
