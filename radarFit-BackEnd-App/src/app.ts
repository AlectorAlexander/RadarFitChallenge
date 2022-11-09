import 'express-async-errors';
import express from 'express';
import productRoute from './routes/products';

const app = express();
app.use(express.json());
app.use(productRoute);

export default app;