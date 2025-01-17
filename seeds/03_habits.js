/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("habits").del();
  await knex("habits").insert([
    {
      id: 1,
      user_id: 1,
      title: "Drink 8 glasses of water",
      frequency: "daily",
      streak_count: 5,
      completion_history: JSON.stringify([
        "2025-01-18",
        "2025-01-19",
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
      ]),
      completed: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      user_id: 1,
      title: "Morning meditation",
      frequency: "daily",
      streak_count: 7,
      completion_history: JSON.stringify([
        "2025-01-16",
        "2025-01-17",
        "2025-01-18",
        "2025-01-19",
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
      ]),
      completed: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      user_id: 1,
      title: "Write in journal",
      frequency: "daily",
      streak_count: 0,
      completion_history: JSON.stringify([
      ]),
      completed: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      user_id: 2,
      title: "Stretch for 10 minutes",
      frequency: "daily",
      streak_count: 10,
      completion_history: JSON.stringify([
        "2025-01-13",
        "2025-01-14",
        "2025-01-15",
        "2025-01-16",
        "2025-01-17",
        "2025-01-18",
      ]),
      completed: true,
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      id: 5,
      user_id: 2,
      title: "Read 10 pages of a book",
      frequency: "daily",
      streak_count: 8,
      completion_history: JSON.stringify([
        "2025-01-15",
        "2025-01-16",
        "2025-01-17",
        "2025-01-18",
        "2025-01-19",
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
      ]),
      completed: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 6,
      user_id: 2,
      title: "Work out for 30 minutes",
      frequency: "daily",
      streak_count: 2,
      completion_history: JSON.stringify(["2025-01-21", "2025-01-22"]),
      completed: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
  
    {
      id: 7,
      user_id: 3,
      title: "Limit social media to 1 hour",
      frequency: "daily",
      streak_count: 4,
      completion_history: JSON.stringify([
        "2025-01-19",
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
      ]),
      completed: false,
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      id: 8,
      user_id: 3,
      title: "Plan tomorrow's tasks",
      frequency: "daily",
      streak_count: 3,
      completion_history: JSON.stringify([
        "2025-01-20",
        "2025-01-21",
        "2025-01-22",
      ]),
      completed: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
