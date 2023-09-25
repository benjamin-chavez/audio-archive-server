import { Knex } from 'knex';
// import argon2 from 'argon2';

const TABLE_NAME = 'app_users';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(TABLE_NAME).del();

  // Inserts seed entries
  // const hashedPassword = await argon2.hash('password');
  await knex(TABLE_NAME).insert([
    {
      username: 'ben.m.chavez@gmail.com',
      auth0_id: 'google-oauth2|100469702973978516051',
    },
    {
      username: 'aminchavez.music@gmail.com',
      auth0_id: 'auth0|650caf196371a502e0233912',
    },
  ]);
}
