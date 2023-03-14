import { RowDataPacket } from 'mysql2';
import { IOrders } from '../interface/IOrders';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  public async getAll(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT  orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) as productsIds 
      FROM Trybesmith.orders JOIN Trybesmith.products 
      ON products.order_id = orders.id GROUP BY orders.id`,
    );
    return rows;
  }
}