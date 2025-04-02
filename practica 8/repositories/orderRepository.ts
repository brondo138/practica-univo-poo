import { injectable } from "inversify";
import { Order } from "../model/order";

export interface IOrderRepository{
    save(order: Order): void;
}

@injectable()
export class orderRepository implements IOrderRepository{
    private orders: Order[] = [];

    save(order: Order): void {
        this.orders.push(order);
        console.log("Pedido guardado correctamente");
    }
}