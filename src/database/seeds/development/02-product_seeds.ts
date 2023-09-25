import { Knex } from 'knex';

const TABLE_NAME = 'products';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(TABLE_NAME).del();

  // Inserts seed entries
  await knex(TABLE_NAME).insert([
    { app_user_id: 1, name: 'song1', software: 'Ableton', genre: 'house' },
    { app_user_id: 2, name: 'song2', software: 'FL Studio', genre: 'Trap' },
    { app_user_id: 1, name: 'song3', software: 'Ableton', genre: 'Dubstep' },
    { app_user_id: 2, name: 'song4', software: 'Ableton', genre: 'house' },
  ]);
}
