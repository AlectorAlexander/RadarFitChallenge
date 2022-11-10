import { Router } from 'express';
import ProductController from '../controllers/ProdutosController';
import ProductModel from '../models/Produto';
import ProdutoService from '../services/ProdutosServices';

const productRoute = Router();

const Product = new ProductModel();
const productService = new ProdutoService(Product);
const productsController = new ProductController(productService);

productRoute.post('/produtos', (req, res) => productsController.create(req, res));
productRoute.get('/produtos', (req, res) => productsController.read(req, res));
productRoute.get('/produtos/:id', (req, res) => productsController.readOne(req, res));
productRoute.put('/produtos/:id', (req, res) => productsController.update(req, res));
productRoute.delete('/produtos/:id', (req, res) => productsController.delete(req, res));

export default productRoute;