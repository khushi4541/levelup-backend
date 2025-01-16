import express from "express";
import * as usersController from "../controllers/users-controller.js";
import authorise from "../middleware/auth.js";

const router = express.Router();

router.get("/user", authorise, usersController.fetchUser);

router.post("/register", usersController.registerUser);

export default router;