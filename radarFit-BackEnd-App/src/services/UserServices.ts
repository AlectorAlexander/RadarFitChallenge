import jwt_decode from 'jwt-decode';
import { sign, SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IUser, UserZodSchema } from '../interfaces/IUser';
import { ErrorService, IService } from '../interfaces/IServices';
import { IModel } from '../interfaces/IModel';
import { Error } from 'mongoose';

const saltRounds = 10;

enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};


class User implements IService<IUser> {
  private _User:IModel<IUser>;

  constructor(model:IModel<IUser>) {
    this._User = model;
  }

  public async create(obj:any):Promise<String | ErrorService> {
    const parsed = UserZodSchema.safeParse(obj);
    if (parsed.success === false) {
      throw parsed.error;
    }
    const { email, senha, role, nome } = obj;
    console.log(obj);
    
    const findInfo = await this._User.readOneByEmail(email)
    if (findInfo) return { error: { message: 'User already registered', status: 409 } };
    const newSenha = await bcrypt.hash(senha, saltRounds)
    await this._User.create({email, senha: newSenha, role, nome});
    return sign({
      nome,
      email,
      role,
    }, 'blabla', jwtConfig);
  };
  

  public async read():Promise<IUser[]> {
    const User = await this._User.read();
    if (!User) throw new Error(ErrorTypes.EntityNotFound);
    return User;
  }

  public async readOne(email:string):Promise<IUser> {
    const User = await this._User.readOneByEmail(email);
    if (!User) throw new Error(ErrorTypes.EntityNotFound);
    return User;
  }

  public async update(id:string, obj: IUser | object):Promise<IUser> {
    const User = await this._User.update(id, obj);
    const parsed = UserZodSchema.safeParse(obj);
    if (parsed.success === false) {
      throw parsed.error;
    }
    if (!User) throw new Error(ErrorTypes.EntityNotFound);
    return User;
  }

  public async delete(id:string):Promise<IUser> {
    const User = await this._User.delete(id);
    if (!User) throw new Error(ErrorTypes.EntityNotFound);
    return User;
  }
}

export default class UserServices extends User {
  public findInfo = async (email: string, senha: string) => {
    const foundUser = await this.readOne( email );
    const checkPassword = foundUser ? foundUser.senha : 'THISISNOTVALIDPASSWORD';
    const validateUser: boolean = bcrypt
      .compareSync(senha, checkPassword);

    const error = { status: 401, message: 'Incorrect email or senha' };

    if (!foundUser || !validateUser) return error;

    return sign({
      nome: foundUser.nome,
      email: foundUser.email,
      role: foundUser.role,
    }, 'blabla', jwtConfig);
  };

  public decodedToken = (token: string): any => {
    try {
      return jwt_decode(token);
    } catch (error) {
      return { error };
    }
  };
}