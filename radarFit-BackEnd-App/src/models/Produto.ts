import { IProduct } from './../interfaces/IProducts';
import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';

export const ProdutoMongooseSchema = new Schema<IProduct>({
  produto: String,  
  valor: Number,  
  descricao: String,
  url_image: String,
  created: Date,
  updated: Date,
});

class Produto extends MongoModel<IProduct> {
  constructor(model = mongooseCreateModel('Produto', ProdutoMongooseSchema)) {
    super(model);
  }
}

export default Produto;