import "dotenv/config";
import initKnex from "knex";
import configuration from "../knexfile.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const knex = initKnex(configuration);
const SALT_ROUNDS = 8;

const fetchUser = async (req, res) => {

  try {
    const user = await knex("users").where({ id: req.token.id }).first();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch user profile" });
  }
};

const registerUser = async (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.username ||
    !req.body.email ||
    !req.body.password
  ) {
    return res
      .status(400)
      .json({ msg: "You must provide all required information" });
  }

  try {
    // Use bcrypt to hash the password the user provided
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    const newUserIds = await knex("users").insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const newUser = await knex("users").where({ id: newUserIds[0] }).first();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: `Couldn't create new user: ${error.message}` });
  }
};

export { fetchUser, registerUser };
