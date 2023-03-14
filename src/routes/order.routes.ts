import { Router } from 'express';
import OrderController from '../controller/order.controller';
import authToken from '../middlewares/auth.token';
import validationOrder from '../middlewares/validationOrder';

const router = Router();
const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', authToken, validationOrder.orderValidation, orderController.create);

export default router;