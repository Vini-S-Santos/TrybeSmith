import mysql from './connection';
import { IUserToken } from '../interface/IUserToken';
import { ILogin } from '../interface/ILogin';

export default class LoginModel {
  private connection = mysql;

  public async getByLogin(login: ILogin): Promise<IUserToken> {
    const { username, password } = login;
    const result = await this.connection.execute(
      'SELECT id, username FROM Trybesmith.users WHERE username=? AND password=?',
      [username, password],
    );
    const [rows] = result;
    const [iUserToken] = rows as IUserToken[];
    return iUserToken;
  }
}