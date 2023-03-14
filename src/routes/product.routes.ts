import { Router } from 'express';
import ProductController from '../controller/product.controller';
import validationProduct from '../middlewares/validationProduct';

const router = Router();
const productController = new ProductController();

router.post(
  '/',
  validationProduct.productAmountValidation,
  validationProduct.productNameValidation,
  productController.create,
);
router.get('/', productController.getAll);

export default router;