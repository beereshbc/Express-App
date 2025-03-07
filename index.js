import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import session from "express-session";

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/fetch", (req, res) => {
  if (req.session.page_viwes) {
    req.session.page_viwes++;
    res.send(`Your visited this site ${req.session.page_viwes} times`);
  } else {
    req.session.page_viwes = 1;
    res.send("Your visited this site at first time Thank You");
  }
});

app.get("/remove-session", (req, res) => {
  req.session.destroy();
  res.send("The session is deleted successufully");
});

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
