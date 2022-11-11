import { Request, Response } from 'express';
import { IProduct } from '../interfaces/IProducts';
import { IService } from '../interfaces/IServices';

export default class ProductController {
  constructor(private _service: IService<IProduct>) { }

  public async create(
    req: Request,
    res: Response<IProduct>,
  ) {
    const {
      produto, valor, descricao, created, updated, url_image
    } = req.body;
    const product = {
      produto, valor, descricao, created, updated, url_image
    };
    const results: any = await this._service.create(product);
    return res.status(201).json(results);
  }

  public async read(
    req: Request,
    res: Response<IProduct[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IProduct>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<IProduct>,
  ) {
    const {
      produto, valor, descricao, created, updated, url_image
    } = req.body;
    
    const { id } = req.params;
    const newCreated = new Date(created)
    const newUpdated = new Date(updated)
    const product: IProduct = {
      produto, valor, descricao, created: newCreated, updated: newUpdated, url_image
    };

    const result = await this._service.update(id, product);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<IProduct>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}
