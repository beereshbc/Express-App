import express from "express";
import { loginController, SignupController } from "./controller.js";
import router from "./Route.js";
import multer from "multer";
import storage from "./config/multer.js";

const PORT = 3000;
const app = express();
app.use(express.json());

//Files uploading using multer by normal form-data in postman
// storage is imported from ./config/multer.js file
const upload = multer({
  storage,
  limits: {
    fileSize: 1024000,
  },
});
app.use(upload.single("image"));

app.post("/form", (req, res) => {
  console.log(req.file);
  res.send("file form recived successfully");
});

//file upload end

app.get("/", (req, res) => {
  res.send("Hello Beeresh");
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port ${PORT}`);
});
