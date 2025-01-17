/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("habits", (table) => {
    table.increments("id").primary(); // Auto-incremented habit ID
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // User ID foreign key
    table.string("title").notNullable(); // Habit title
    table.string("frequency").notNullable(); // Frequency (e.g., daily, weekly)
    table.integer("streak_count").defaultTo(0);
    table.boolean("completed").defaultTo(false); 
    table.json("completion_history"); // Array of completed dates
    table.timestamps(true, true); // Created and updated timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("habits");
};
