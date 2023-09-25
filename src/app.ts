// src/app.ts
// @ts-nocheck

// import ConnectSessionKnex from 'connect-session-knex';
import cookieParser from 'cookie-parser';
import express from 'express';
// import listEndpoints from 'express-list-endpoints';
// import session from 'express-session';
import morgan from 'morgan';
// import passport from 'passport';
// import knex from './database/db';
import indexRoutes from './routes/index';
import appUserRoutes from './routes/appUserRoutes';
// import authRoutes from './routes/auth';
import auth0Routes from './routes/auth0';
import productRoutes from './routes/productRoutes';
import {
  generalErrorHandler,
  notFoundHandler,
} from './middleware/errorMiddleware';
import flash from 'express-flash';
const cors = require('cors');
const helmet = require('helmet');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

// const KnexSessionStore = ConnectSessionKnex(session);

const app = express();
const port = process.env.API_PORT || 5000;
const baseUrl = process.env.AUTH0_BASE_URL;
const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

// const corsOptions = {
//   origin: 'http://localhost:3000',
// };

// app.use(cors(corsOptions));

if (!baseUrl || !issuerBaseUrl) {
  throw new Error(
    'Please make sure that the file .env.local is in place and populated'
  );
}

if (!audience) {
  console.log(
    'AUTH0_AUDIENCE not set in .env.local. Shutting down API server.'
  );
  process.exit(1);
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

// enforce on all endpoints
// app.use(jwtCheck);
// app.use(checkJwt);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

// app.use(
//   session({
//     store: new KnexSessionStore({
//       knex: knex,
//       tablename: 'sessions',
//       createtable: true,
//     }),
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// export const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`,
//   }),
//   audience: audience,
//   issuer: `${issuerBaseUrl}/`,
//   algorithms: ['RS256'],
// });

// app.get('/api/shows', checkJwt, (req, res) => {
//   res.send({
//     msg: 'Your access token was successfully validated!',
//   });
// });

// app.use(passport.authenticate('session'));
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

app.use('/api', indexRoutes);
app.use('/api/appUsers', appUserRoutes);
// // app.use('/api/auth', authRoutes);
// app.use('/', auth0Routes);
// app.use('/api/products', productRoutes);

app.use(notFoundHandler);
app.use(generalErrorHandler);

// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   return res.set(err.headers).status(err.status).json({ message: err.message });
// });

export default app;
