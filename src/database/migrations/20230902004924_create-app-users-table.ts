// import { Knex } from 'knex';

// const TABLE_NAME = 'app_users';

// console.log(process.env.NODE_ENV);

// exports.up = function (knex: Knex): Promise<void> {
//   return knex.schema.createTable(TABLE_NAME, (table) => {
//     table.increments('id').primary();
//     table.string('auth0_id').unique().notNullable();
//     table.string('username').unique();
//     // table.string('hashedPassword');
//     // table.boolean('isAdmin').notNullable().defaultTo(false);
//   });
// };

// exports.down = function (knex: Knex): Promise<void> {
//   return knex.schema.dropTableIfExists(TABLE_NAME);
// };

import { Kysely, sql } from 'kysely';

const TABLE_NAME = 'app_users';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable(TABLE_NAME)
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('auth0_id', 'varchar', (col) => col.unique().notNull())
    .addColumn('username', 'varchar', (col) => col.unique())
    .execute();
  // Uncomment if needed:
  // .addColumn('hashedPassword', 'varchar')
  // .addColumn('isAdmin', 'boolean', (col) => col.notNull().defaultTo(false))
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable(TABLE_NAME).execute();
}
