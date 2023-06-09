import { Router } from 'express';
import LoginController from '../controller/login.controller';
import loginError from '../middlewares/login.error';

const router = Router();

const loginController = new LoginController();

router.post('/', loginError, loginController.login);

export default router;