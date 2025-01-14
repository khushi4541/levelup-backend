/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("messages", (table) => {
    table.increments("id").primary(); // Auto-incremented message ID
    table
      .integer("sender_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Sender ID foreign key
    table
      .integer("recipient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Recipient ID foreign key
    table.text("message").notNullable(); // Encouragement message
    table.timestamp("timestamp").defaultTo(knex.fn.now()); // Timestamp
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("messages");
};
