import 'dotenv/config.js';
import express from 'express';
import bodyParser from 'body-parser';

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import './src/database/index.js';

import homeRouter from './src/routes/home--router.js';
import userRouter from './src/routes/user--router.js';
import tokenRouter from './src/routes/token--houter.js';
import studentRouter from './src/routes/student--router.js';
import imageRouter from './src/routes/image--router.js';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.urlencoded({ extends: true }));
    this.app.use(bodyParser.json());
    this.app.use(express.static(resolve(dirName, 'uploads')));
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
