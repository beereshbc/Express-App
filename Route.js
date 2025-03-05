import express, { Router } from "express";
import { loginController, SignupController } from "./controller.js";

const router = Router();

router.get("/signup", SignupController);
router.get("/login", loginController);

export default router;
