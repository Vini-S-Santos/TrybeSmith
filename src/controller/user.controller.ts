import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  public userService = new UserService();

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.create(user);

    res.status(201).json({ token });
  };
}
