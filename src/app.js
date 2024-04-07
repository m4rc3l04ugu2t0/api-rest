import 'dotenv/config.js';
import express from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';

import './database/index.js';

import homeRouter from './routes/home--router.js';
import userRouter from './routes/user--router.js';
import tokenRouter from './routes/token--houter.js';
import studentRouter from './routes/student--router.js';
import imageRouter from './routes/image--router.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.urlencoded({ extends: true }));
    this.app.use(bodyParser.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use(express.json());

    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/token/', tokenRouter);
    this.app.use('/students/', studentRouter);
    this.app.use('/image/', imageRouter);
  }
}

export default new App().app;
