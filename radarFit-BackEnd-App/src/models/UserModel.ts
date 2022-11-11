import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import MongoModel from './MongoModel';

export const UserMongooseSchema = new Schema<IUser>({
  nome: String,  
  email: String,
  role: String,
  senha: String,
});

class User extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('User', UserMongooseSchema)) {
    super(model);
  }
}

export default User;