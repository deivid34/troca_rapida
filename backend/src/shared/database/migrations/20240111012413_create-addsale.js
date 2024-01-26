/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("addsale", (table) => {
      table.increments("id").primary();// Coluna para armazenar a URL da imagem
      table.text("price").notNullable();
      table.string("title").notNullable();
      table.text("description");
      table.text("address").notNullable(); // Nova coluna para armazenar o endereço
      table.integer("user_id").unsigned().notNullable();
      table.foreign("user_id").references("id").inTable("users");
      // ... outras informações do produto ...
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable("addsale");
  };