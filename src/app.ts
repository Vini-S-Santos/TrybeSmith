import express from 'express';
import productRoute from './routes/product.routes';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';
import 'express-async-errors';
import loginRoutes from './routes/login.routes';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);

app.use(httpErrorMiddleware);

export default app;
