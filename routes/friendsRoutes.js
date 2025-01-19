import express from "express";
import authorize from "../middleware/auth.js";
import * as friendsController from "../controllers/friends-controller.js"

const router = express.Router();

router.route("/request")

    .get(authorize, friendsController.getFriendRequests)

export default router;