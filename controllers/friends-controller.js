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

const declineFriendRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await knex("friendships")
      .where({ id, status: "pending" })
      .delete();

    if (!deleted) {
      return res.status(404).json({ message: "Friend request not found" });
    }

    res.status(200).json({ message: "Friend request declined" });
  } catch (error) {
    res.status(500).json({ message: "Error declining friend request" });
  }
};

const getFriendsLeaderboard = async (req, res) => {
  const userId = req.token.id;
  const maxStreak = 30; 

  try {
    const leaderboardData = await knex("users")
      .leftJoin("friendships", function () {
        this.on("users.id", "=", "friendships.user_id").orOn(
          "users.id",
          "=",
          "friendships.friend_id"
        );
      })
      .leftJoin("habits", function () {
        this.on("users.id", "=", "habits.user_id");
      })
      .select(
        "users.id as user_id",
        "users.username",
        knex.raw("SUM(DISTINCT habits.streak_count) as total_streaks"), // Removed DISTINCT to avoid incorrect totals
        knex.raw("COUNT(DISTINCT habits.id) as active_habits"),
        knex.raw(`
          CASE
            WHEN COUNT(DISTINCT habits.id) = 0 THEN 0
            ELSE SUM(DISTINCT habits.streak_count) / COUNT(DISTINCT habits.id)
          END as average_streak
        `),
        knex.raw(
          `
          CASE
            WHEN COUNT(DISTINCT habits.id) = 0 THEN 0
            ELSE SUM(DISTINCT habits.streak_count) / (COUNT(DISTINCT habits.id) * ?)
          END as completion_ratio
        `,
          [maxStreak] // Pass the value here
        ),
        knex.raw(
          `
          CASE
            WHEN COUNT(DISTINCT habits.id) = 0 THEN 0
            ELSE 
              (SUM(DISTINCT habits.streak_count) / COUNT(DISTINCT habits.id)) * 0.5 + 
              COUNT(DISTINCT habits.id) * 0.3 + 
              (SUM(DISTINCT habits.streak_count) / (COUNT(DISTINCT habits.id) * ?)) * 0.2
          END as score
        `,
          [maxStreak] // Pass the value here again
        )
      )
      .where(function () {
        this.where("friendships.user_id", userId)
          .orWhere("friendships.friend_id", userId)
          .orWhere("users.id", userId);
      })
      .andWhere("friendships.status", "=", "accepted")
      .groupBy("users.id", "users.username")
      .orderBy("score", "desc");

    res.status(200).json(leaderboardData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to fetch leaderboard", error });
  }
};

export {
  getFriendRequests,
  acceptFriendRequest,
  declineFriendRequest,
  getFriendsLeaderboard,
};
