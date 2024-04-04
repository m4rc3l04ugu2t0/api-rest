import { Router } from 'express';
import userController from '../controllers/User--Controller.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show)

router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router;
