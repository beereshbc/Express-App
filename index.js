import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import session from "express-session";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false,
    saveUninitialized: false,
  })
);

const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password,
  });
  res.send("User Registered");
  console.log(users);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  console.log(user);

  if (!user || user.password !== password) {
    return res.send("UnAuthoraized user");
  }
  req.session.user = user;
  res.send("User logged in");
});

app.get("/dashboard", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    return res.send("unauthorized access");
  }
  res.send(`Welcome ${req.session.user.username}`);
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
