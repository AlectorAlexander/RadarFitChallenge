import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

const userController = new UserController();

/* const usersSlashId = '/users/:id'; */

router.post('/login', userController.login);
router.get('/login/validate', userController.validate);
router.get('/users', userController.findAll);
router.post('/user', userController.register);

export default router;