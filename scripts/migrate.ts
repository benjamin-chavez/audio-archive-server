// migrate.ts
// @ts-nocheck
import {
  Kysely,
  Migrator,
  PostgresDialect,
  FileMigrationProvider,
} from 'kysely';
import { run } from 'kysely-migration-cli';

const db = new Kysely<any>({
  dialect: new PostgresDialect({
    connectionString: process.env.DATABASE_URL,
  }),
});

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider('../src/database/migrations'),
});

// run(db, migrator);
run(db, migrator, '../src/database/migrations');
