import "dotenv/config";
import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getFriendRequests = async (req, res) => {
  const userId = req.token.id;

  try {
    const friendRequests = await knex("friendships")
      .where({ user_id: userId, status: "pending" })
      .join("users", "friendships.friend_id", "users.id")
      .select("friendships.id", "users.username as sender_username");

    res.status(200).json(friendRequests);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Unable to fetch friend requests: ${error.message}` });
  }
};

const acceptFriendRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await knex("friendships")
      .where({ id })
      .update({ status: "accepted" });

    if (!updated) {
      return res.status(404).json({ message: "Friend request not found" });
    }

    res.status(200).json({ message: "Friend request accepted!" });
  } catch (error) {
    res.status(500).json({ message: "Error accepting friend request" });
  }
};

export { getFriendRequests, acceptFriendRequest };
