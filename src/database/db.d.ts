import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, string | number | bigint, string | number | bigint>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface AppUsers {
  id: Generated<number>;
  auth0_id: string;
  username: string | null;
}

export interface KnexMigrations {
  id: Generated<number>;
  name: string | null;
  batch: number | null;
  migration_time: Timestamp | null;
}

export interface KnexMigrationsLock {
  index: Generated<number>;
  is_locked: number | null;
}

export interface Products {
  id: Generated<Int8>;
  app_user_id: number;
  name: string;
  software: string;
  genre: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
}

export interface DB {
  app_users: AppUsers;
  knex_migrations: KnexMigrations;
  knex_migrations_lock: KnexMigrationsLock;
  products: Products;
}
