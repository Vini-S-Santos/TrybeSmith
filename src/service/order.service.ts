import OrderModel from '../models/order.model';
import { IOrders } from '../interface/IOrders';
import { ICreateOrder } from '../interface/ICreateOrder';

export default class OrderService {
  public orderModel = new OrderModel();

  public async getAll(): Promise<IOrders[]> {
    const order = await this.orderModel.getAll();
    return order;
  }

  public async create(order: ICreateOrder): Promise<boolean | ICreateOrder> {
    const created = await this.orderModel.insert(order);

    if (!created) return false;

    return order;
  }
}