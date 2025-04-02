import { inject, injectable } from "inversify";
import { TYPES } from "../types/types";
import { Order } from "../model/order";
import { IOrderRepository } from "../repositories/orderRepository";

@injectable()
export class OrderService{
    constructor( @inject(TYPES.IOrderRepository) private orderRepository: IOrderRepository){}

    placeOrder(order: Order): void{
        console.log(`Procesando pedido para ${order.customer.name}...`);
        this.orderRepository.save(order);
    }
}
