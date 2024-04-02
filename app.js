import express from 'express';
import router from './src/routes/home--router.js';

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
    this.app.use(router);
  }
}

export default new App().app;
