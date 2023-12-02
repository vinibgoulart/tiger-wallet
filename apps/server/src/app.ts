import express from 'express';
import {
  apiUserPost,
  apiUserGet,
  apiUserAuthPost,
  apiUserLogoutPost,
} from './modules/user';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middleware/auth';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/user', apiUserPost);
app.post('/user/auth', apiUserAuthPost);

app.get('/user/:id', authMiddleware, apiUserGet);
app.post('/user/logout', authMiddleware, apiUserLogoutPost);

export default app;
