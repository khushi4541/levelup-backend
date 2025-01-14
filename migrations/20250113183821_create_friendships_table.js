/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("friendships", (table) => {
    table.increments("id").primary(); // Auto-incremented friendship ID
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // User ID foreign key
    table
      .integer("friend_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Friend ID foreign key
    table.enum("status", ["pending", "accepted"]).defaultTo("pending"); // Friendship status
    table.timestamps(true, true); // Created and updated timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("friendships");
};
