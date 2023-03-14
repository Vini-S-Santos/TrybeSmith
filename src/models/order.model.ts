import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IOrders } from '../interface/IOrders';
import mysql from './connection';
import { ICreateOrder } from '../interface/ICreateOrder';

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

  public async insert(order : ICreateOrder) {
    const [{ insertId }] = await this.connection.execute<ICreateOrder & ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [order.userId],
    );

    if (insertId) {
      await Promise.all(order.productsIds.map(async (id) => {
        await this.connection.execute<ResultSetHeader>(
          `UPDATE Trybesmith.products 
          SET order_id = ?
          WHERE id = ?;`,
          [insertId, id],
        );
      }));
      return true;
    }
    return false;
  }
}