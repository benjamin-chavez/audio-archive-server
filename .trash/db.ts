// // src/database/db.ts

// import 'dotenv/config';
// import knexConstructor from 'knex';
// import knexConfig from '../../knexfile';

// const environment = process.env.NODE_ENV || 'development';
// const config = knexConfig[environment];

// const knex = knexConstructor(config);

// export default knex;

// src/db.ts

// import { Database } from '../types.js'; // this is the Database interface we defined earlier
import { Pool } from 'pg';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
// import { DB } from 'kysely-codegen';
import { DB } from '../src/database/db';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DEV_DB_DATABASE,
    host: 'localhost',
    user: process.env.DEV_DB_USER,
    port: 5434,
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
  dialect,
  plugins: [new CamelCasePlugin()],
});
