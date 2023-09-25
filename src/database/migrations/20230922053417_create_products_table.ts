// import { Knex } from 'knex';

// const TABLE_NAME = 'products';

// exports.up = function (knex: Knex): Promise<void> {
//   return knex.schema.createTable(TABLE_NAME, (table) => {
//     table.bigIncrements('id').primary();
//     table
//       .integer('app_user_id')
//       .references('id')
//       .inTable('app_users')
//       .notNullable();

//     table.string('name').notNullable();
//     table.string('software').notNullable();
//     table.string('genre').notNullable();
//     table.timestamps(true, true);
//   });
// };

// exports.down = function (knex: Knex): Promise<void> {
//   return knex.schema.dropTableIfExists(TABLE_NAME);
// };

import { Kysely, sql } from 'kysely';

const TABLE_NAME = 'products';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable(TABLE_NAME)
    .addColumn('id', 'bigserial', (col) => col.primaryKey())
    .addColumn('app_user_id', 'integer', (col) =>
      col.references('app_users.id').notNull()
    )
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('software', 'varchar', (col) => col.notNull())
    .addColumn('genre', 'varchar', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();

  // Create an index for 'app_user_id' for better query performance
  await db.schema
    .createIndex('products_app_user_id_index')
    .on(TABLE_NAME)
    .column('app_user_id')
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable(TABLE_NAME).execute();
}
