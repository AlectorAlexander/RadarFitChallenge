import { IProduct, ProductZodSchema } from './../interfaces/IProducts';
import { IService } from '../interfaces/IServices';
import { IModel } from '../interfaces/IModel';

enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

class ProdutoService implements IService<IProduct> {
  private _Produto:IModel<IProduct>;

  constructor(model:IModel<IProduct>) {
    this._Produto = model;
  }

  public async create(obj:unknown):Promise<IProduct> {
    const parsed = ProductZodSchema.safeParse(obj);
    
    if (parsed.success === false) {
      throw parsed.error;
    }
    const result = await this._Produto.create(parsed.data);
    return result;
  }

  public async read():Promise<IProduct[]> {
    const Produto = await this._Produto.read();
    if (!Produto) throw new Error(ErrorTypes.EntityNotFound);
    return Produto;
  }

  public async readOne(_id:string):Promise<IProduct> {
    const Produto = await this._Produto.readOne(_id);
    if (!Produto) throw new Error(ErrorTypes.EntityNotFound);
    return Produto;
  }

  public async update(id:string, obj: IProduct | object):Promise<IProduct> {
    const Produto = await this._Produto.update(id, obj);
    const parsed = ProductZodSchema.safeParse(obj);
    if (parsed.success === false) {
      throw parsed.error;
    }
    if (!Produto) throw new Error(ErrorTypes.EntityNotFound);
    return Produto;
  }

  public async delete(id:string):Promise<IProduct> {
    const Produto = await this._Produto.delete(id);
    if (!Produto) throw new Error(ErrorTypes.EntityNotFound);
    return Produto;
  }
}

export default ProdutoService;