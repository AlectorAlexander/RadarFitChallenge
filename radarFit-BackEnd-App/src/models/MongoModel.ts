import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    const result = await this._model.create({ ...obj });
    return result;
  }

  public async insertMany(array: Array<T>):Promise<T[]> {
    const result = await this._model.insertMany(array);
    return result;
  }

  public async read():Promise<T[]> {
    const result = await this._model.find({ });
    return result;
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const result = await this._model.findOne({ _id });
    return result;
  }

  public async readOneByEmail(email:string):Promise<T | null> {
    const result = await this._model.findOne({ email });
    return result;
  }

  public async update(id:string, obj: object):Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    const result = await this._model.findByIdAndUpdate(id, obj);
    return result;
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const result = await this._model.findByIdAndDelete({ _id });
    return result;
  }

  public async deleteMany(condition: any): Promise<any> {
    return await this._model.deleteMany(condition).exec();
  }

}

export default MongoModel;
