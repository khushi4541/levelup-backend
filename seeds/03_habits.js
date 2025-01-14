/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('habits').del()
  await knex('habits').insert([
    {
      id: 1,
      user_id: 1,
      title: "Morning Workout",
      frequency: "daily",
      streak_count: 3,
      completion_history: JSON.stringify(["2024-12-18", "2024-12-19", "2024-12-20"])
    },
    {
      id: 2,
      user_id: 1,
      title: "Drink Water",
      frequency: "daily",
      streak_count: 10,
      completion_history: JSON.stringify(["2024-12-11", "2024-12-12", "2024-12-13", "2024-12-14", "2024-12-15", "2024-12-16", "2024-12-17", "2024-12-18", "2024-12-19", "2024-12-20"])
    },
    {
      id: 3,
      user_id: 1,
      title: "Write a Journal",
      frequency: "weekly",
      streak_count: 2,
      completion_history: JSON.stringify(["2024-12-10", "2024-12-17"])
    },
    {
      id: 4,
      user_id: 2,
      title: "Read a Book",
      frequency: "daily",
      streak_count: 7,
      completion_history: JSON.stringify(["2024-12-14", "2024-12-15", "2024-12-16", "2024-12-17", "2024-12-18", "2024-12-19", "2024-12-20"])
    },
    {
      id: 5,
      user_id: 2,
      title: "Stretching",
      frequency: "daily",
      streak_count: 5,
      completion_history: JSON.stringify(["2024-12-16", "2024-12-17", "2024-12-18", "2024-12-19", "2024-12-20"])
    },
    {
      id: 6,
      user_id: 2,
      title: "Cook a Meal",
      frequency: "weekly",
      streak_count: 1,
      completion_history: JSON.stringify(["2024-12-14"])
    },
    {
      id: 7,
      user_id: 3,
      title: "Meditate",
      frequency: "daily",
      streak_count: 1,
      completion_history: JSON.stringify(["2024-12-20"])
    },
    {
      id: 8,
      user_id: 3,
      title: "Evening Walk",
      frequency: "daily",
      streak_count: 4,
      completion_history: JSON.stringify(["2024-12-17", "2024-12-18", "2024-12-19", "2024-12-20"])
    },
    {
      id: 9,
      user_id: 3,
      title: "Learn a Skill",
      frequency: "weekly",
      streak_count: 3,
      completion_history: JSON.stringify(["2024-12-06", "2024-12-13", "2024-12-20"])
    },
    {
      id: 10,
      user_id: 4,
      title: "Water Plants",
      frequency: "weekly",
      streak_count: 2,
      completion_history: JSON.stringify(["2024-12-10", "2024-12-17"])
    },
    {
      id: 11,
      user_id: 4,
      title: "Go for a run",
      frequency: "weekly",
      streak_count: 1,
      completion_history: JSON.stringify(["2024-12-18"])
    },
    {
      id: 12,
      user_id: 4,
      title: "Yoga Practice",
      frequency: "daily",
      streak_count: 2,
      completion_history: JSON.stringify(["2024-12-19", "2024-12-20"])
    },
  ]);
};
