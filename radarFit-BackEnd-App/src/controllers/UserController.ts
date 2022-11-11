import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/UserServices';
import User from '../models/UserModel';
const user = new User()

class UserController {
  constructor(private userService = new UserService(user as any)) { }

  public validate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    const tkn = token || 'fail';
    const { role, error } = this.userService.decodedToken(tkn);

    if (!role) return next(error);

    res.status(StatusCodes.OK).json({ role });
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, senha } = req.body;

    const response = await this.userService.findInfo(email, senha);

    if (typeof response === 'object') return next(response);

    return res.status(StatusCodes.OK).json({ token: response });
  };

  public register = async  (req: Request, res: Response, next: NextFunction) => {
    const { email, senha, role, nome } = req.body;
    

    const response = await this.userService.create({email, senha, role, nome});
    
    if (typeof response === 'object') return next(response);

    return res.status(StatusCodes.OK).json({ token: response });
  };


  public findAll = async  (req: Request, res: Response, next: NextFunction) => {
    const response = await this.userService.read()

    return res.status(StatusCodes.OK).json({ response });
  };

}

export default UserController;