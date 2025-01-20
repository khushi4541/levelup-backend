import express from "express";
import authorize from "../middleware/auth.js";
import * as friendsController from "../controllers/friends-controller.js"

const router = express.Router();

router.get("/requests", authorize, friendsController.getFriendRequests)

router.route("/request/:id")
    .patch(authorize, friendsController.acceptFriendRequest)

    .delete(authorize, friendsController.declineFriendRequest)

export default router;