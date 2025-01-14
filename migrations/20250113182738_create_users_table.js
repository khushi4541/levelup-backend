/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); // Auto-incremented user ID
    table.string("first_name").notNullable(); // First name
    table.string("last_name").notNullable(); // Last name
    table.string("username").notNullable().unique(); // Username
    table.string("email").notNullable().unique(); // Email
    table.string("password").notNullable(); // Hashed password
    table.string("profile_picture").nullable(); // Profile picture (optional)
    table.timestamps(true, true); // Created and updated timestamps
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
