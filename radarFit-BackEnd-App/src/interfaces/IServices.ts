import { IProduct } from './IProducts';
import { IUser } from "./IUser";
export type errorService = {
  message: string,
  status: number
}

export type ErrorService = {
  error: errorService,
}


export interface IService<T> {
    create(obj:unknown):Promise<IUser | ErrorService | IProduct | String>,
    read():Promise<T[]>,
    readOne(_id:string):Promise<T>,
    update(id:string, obj:T):Promise<T>,
    delete(id: string):Promise<T>,
  }