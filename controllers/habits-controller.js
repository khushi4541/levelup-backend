import "dotenv/config";
import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getHabits = async (req, res) => {
  try {
    const habits = await knex("habits").where({ user_id: req.token.id });

    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch habits" });
  }
};

export {getHabits};
