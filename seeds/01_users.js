/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      first_name: "Alice",
      last_name: "Smith",
      username: "alice123",
      email: "alice@example.com",
      password: "hashed_password_1",
      profile_picture: "https://example.com/profiles/alice.jpg"
    },
    {
      id: 2,
      first_name: "Jackie",
      last_name: "Zhao",
      username: "jackieZ",
      email: "jackie@example.com",
      password: "hashed_password_2",
      profile_picture: null
    },
    {
      id: 3,
      first_name: "Anita",
      last_name: "Hernandez",
      username: "anita_H",
      email: "anita@example.com",
      password: "hashed_password_4",
      profile_picture: null
    },
    {
      id: 4,
      first_name: "Raj",
      last_name: "Sharma",
      username: "RSharma",
      email: "raj@example.com",
      password: "hashed_password_5",
      profile_picture: "https://example.com/profiles/ethan.jpg"
    },
  ]);
};
