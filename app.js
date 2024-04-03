import 'dotenv/config.js'
import './src/database/index.js'

import express from 'express';
import homeRouter from './src/routes/home--router.js';
import userRouter from './src/routes/user--router.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extends: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
  }
}

export default new App().app;
