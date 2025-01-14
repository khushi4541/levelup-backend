/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("messages").del();
  await knex("messages").insert([
    {
      id: 1,
      sender_id: 1,
      recipient_id: 2,
      message: "Great job on your streak!",
      timestamp: "2024-12-20 09:00:00",
    },
    {
      id: 2,
      sender_id: 2,
      recipient_id: 1,
      message: "Thanks, keep it up with your workout!",
      timestamp: "2024-12-20 10:00:00",
    },
    {
      id: 3,
      sender_id: 3,
      recipient_id: 4,
      message: "Don't forget to water your plants today.",
      timestamp: "2024-12-19 08:30:00",
    },
    {
      id: 4,
      sender_id: 1,
      recipient_id: 3,
      message: "Meditation is a great habit, well done!",
      timestamp: "2024-12-20 07:00:00",
    },
  ]);
};
