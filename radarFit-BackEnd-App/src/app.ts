import 'express-async-errors';
import express from 'express';
import productRoute from './routes/products';
import userRoute from './routes/login';
import cors from 'cors'
import errorHandler from './errors/error';


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(productRoute);
app.use(userRoute);
app.use(errorHandler)

export default app;
