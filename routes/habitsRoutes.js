import express from "express";
import authorize from "../middleware/auth.js";
import * as habitsController from "../controllers/habits-controller.js";

const router = express.Router();

router.route("/")
    .get(authorize, habitsController.getHabits)

    .post(authorize, habitsController.postHabit)

router.delete("/:id", authorize, habitsController.deleteHabit)

router.post("/:id/completion", authorize, habitsController.completeHabits);

export default router;
