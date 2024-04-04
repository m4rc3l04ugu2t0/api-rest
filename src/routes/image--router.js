import { Router } from 'express';
import imageController from '../controllers/Image--controller.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.post('/', loginRequired, imageController.store);

export default router;
