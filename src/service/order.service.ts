import OrderModel from '../models/order.model';
import { IOrders } from '../interface/IOrders';

export default class OrderService {
  public orderModel = new OrderModel();

  public async getAll(): Promise<IOrders[]> {
    const order = await this.orderModel.getAll();
    return order;
  }
}