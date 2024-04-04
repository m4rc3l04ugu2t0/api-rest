import { Router } from 'express';
import multer from 'multer';
import imageController from '../controllers/Image--controller.js';

import multerConfig from '../config/multer--config.js';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('image'), imageController.store);

export default router;
