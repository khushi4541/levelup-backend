/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
 
  await knex('friendships').del()
  await knex('friendships').insert([
    { id: 1, user_id: 1, friend_id: 2, status: "accepted" },
    { id: 2, user_id: 1, friend_id: 3, status: "accepted" },
    { id: 3, user_id: 2, friend_id: 4, status: "pending" },
    { id: 4, user_id: 3, friend_id: 4, status: "accepted" },
  ]);
};
