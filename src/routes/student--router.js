import { Router } from 'express';
import studentController from '../controllers/Student--controller.js';

const router = new Router();

router.get('/', studentController.index);

export default router;
