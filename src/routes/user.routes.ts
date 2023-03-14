import { Router } from 'express';
import UserController from '../controller/user.controller';
import validationUser from '../middlewares/validationUser';

const router = Router();

const userController = new UserController();

router.post(
  '/',
  validationUser.vocationValidation,
  validationUser.levelValidation,
  validationUser.passwordValidation,
  validationUser.usernameValidation,
  userController.create,
);

export default router;