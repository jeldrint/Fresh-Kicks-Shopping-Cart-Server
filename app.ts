import express, {Application, Request, Response, Express} from 'express';
import * as path from 'path';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import {router as indexRoute} from './routes/index';

//ENV
require('dotenv').config();

const app: Application = express();

//MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors<Request>());

//PASSPORT MIDDLEWARES
app.use(session({secret: process.env.SECRET as string, resave: false, saveUninitialized: true}))
app.use(passport.session());
app.use('/', indexRoute);

// PORT CONNECT
const port = parseInt(process.env.PORT || '3000');
app.listen(port, '0.0.0.0', () => console.log(`Server is connected to port ${port}`));