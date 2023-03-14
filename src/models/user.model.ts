import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interface/IUser';
import { IUserToken } from '../interface/IUserToken';

export default class UserModel {
  private connection = mysql;

  public async create(user: IUser): Promise<IUserToken> {
    const { username, vocation, level, password } = user;

    const [users] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = users;
    return { id: insertId, username, vocation, level };
  }
}