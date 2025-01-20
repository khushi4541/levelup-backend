/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      first_name: "Alice",
      last_name: "Smith",
      username: "alice123",
      email: "alice@example.com",
      password: "$2b$08$GSTmQNXM29ookZZDlNemmuhz7frw0HMtONN.aXzMrjJNfj7r/xGQa",
      profile_picture: "https://example.com/profiles/alice.jpg",
    },
    {
      id: 2,
      first_name: "Jackie",
      last_name: "Zhao",
      username: "jackieZ",
      email: "jackie@example.com",
      password: "hashed_password_2",
      profile_picture: null,
    },
    {
      id: 3,
      first_name: "Anita",
      last_name: "Hernandez",
      username: "anita_H",
      email: "anita@example.com",
      password: "hashed_password_4",
      profile_picture: null,
    },
    {
      id: 4,
      first_name: "Raj",
      last_name: "Sharma",
      username: "Rsharm",
      email: "raj@example.com",
      password: "hashed_password_5",
      profile_picture: "https://example.com/profiles/ethan.jpg",
    },
    {
      id: 6,
      first_name: "Sarah",
      last_name: "Thompson",
      username: "sarah_T",
      email: "sarah@example.com",
      password: "$2b$08$3p9MeicA1B3FmHMw1sliluEcu0lozd7BT2suhowW0P5f0cr3BkZ/u",
    },
    {
      id: 7,
      first_name: "Francis",
      last_name: "Cullen",
      username: "F.cullen",
      email: "francis@example.com",
      password: "$2b$08$zjhWWgqpOwfbMozMy2kCie.aNemR6rrmnwuJlu.rwluB9SA4vjrUq",
    },

  ]);
};
