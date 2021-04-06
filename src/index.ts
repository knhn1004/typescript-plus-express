import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';

import './controllers/RootController';
import './controllers/AuthController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ keys: ['jjoijoeiwjiejoijwioejfo'] }));

app.use(AppRouter.getInstance());

app.listen(3000, (): void => {
  console.log('listening on port 3000');
});
