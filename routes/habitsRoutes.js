import express from "express";
import authorize from "../middleware/auth.js";
import * as habitsController from '../controllers/habits-controller.js'

const router = express.Router();

router.get("/", authorize, habitsController.getHabits)

export default router;
