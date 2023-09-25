// src/routes/users.ts

import { RequestHandler, Router } from 'express';
import asyncHandler from 'express-async-handler';
// import { User } from '../../.trash/@types/user';
// import knex from '../database/db';
import
// import { protect, admin } from '../middleware/authMiddleware';

const router = Router();

// async function demo() {
//   const product = await knex.
// }

/**
 * @description:    Get all users
 * @route:          GET /api/users
 * @access:         Private/Admin
 */
router.get(
  '/',
  // protect,
  // admin,
  asyncHandler(async (req, res) => {
    const users: appUser[] = await knex('users');
    res.status(200).json({ message: 'Users retrieved successfully', users });
  })
);

/**
 * @description:    Get current user
 * @route:          GET /api/users/:id
 * @access:         Private
 */
router.get(
  '/:id',
  // protect,
  asyncHandler(async (req, res) => {
    // const user: Partial<User> = req.user;
    const { id } = req.params;

    const user = await knex('users').where('id', id).first();

    res
      .status(200)
      .json({ message: 'User details retrieved successfully', user });
  })
);

/**
 * @description:    Verify that the user record exists. If not, add the record to the db.
 * @route:          POST /api/users/validate-registration
 * @access:         Public
 */
router.post(
  '/validate-registration',
  asyncHandler(async (req, res) => {
    let message = 'User details retrieved successfully';
    console.log(req.body);
    const { auth0_id, username } = req.body;
    let userRecord;

    // const existingUser = await knex('users')
    userRecord = await knex('users').where('auth0_id', auth0_id).first();

    if (!userRecord) {
      userRecord = await knex('users')
        .insert({
          auth0_id: auth0_id,
          username: username,
        })
        .returning('*');

      message = 'New user registered';
    }

    res.status(200).json({ message, user: userRecord });
  })
);

export default router;
