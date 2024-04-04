import { Router } from 'express';
import studentController from '../controllers/Student--controller.js';

const router = new Router();

router.get('/', studentController.index);
router.post('/', studentController.store);
router.get('/:id', studentController.show);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

export default router;
