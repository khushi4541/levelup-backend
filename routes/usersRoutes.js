import express from "express";
import * as usersController from "../controllers/users-controller.js";
import authorize from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", authorize, usersController.fetchUser);

router.post("/register", usersController.registerUser);

router.post("/login", usersController.loginUser)

export default router;