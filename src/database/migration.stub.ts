// src/database/migrations/migration.stub.js

// ------------------------------------------------------------------
// .lib/migration.stub.js



exports.up = (knex, promise) =>
  knex.schema.createTable(TABLE_NAME, (t) => {
    t.increments();
    t.timestamp();
    t.timestamp();
  });

exports.down = (knex, Promise) => knex.schema.dropTable(TABLE_NAME);

//////////////////////////

import { Kysely } from 'kysely';

const TABLE_NAME = 'TODO:"';

export async function up(db: Kysely<any>): Promise<void> {
  // Migration code
}

export async function down(db: Kysely<any>): Promise<void> {
  // Migration code
}
