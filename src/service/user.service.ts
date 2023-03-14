import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interface/IUser';
import { IUserToken } from '../interface/IUserToken';
import UserModel from '../models/user.model';

export default class UserService {
  public userModel = new UserModel();

  public jwt = jsonwebtoken;

  public async create(user: IUser): Promise<IUser> {
    return this.userModel.create(user);
  }

  public generateToken(user: IUserToken) {
    const payload = {
      id: user.id,
      username: user.username,
    };
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}