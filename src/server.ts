// src/server.ts

import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Server listening on port! ${PORT}`);
// });

const server = app.listen(PORT, () =>
  console.log(`API Server listening on port ${PORT}`)
);

process.on('SIGINT', () => server.close());
