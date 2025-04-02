import "reflect-metadata";
import { Container } from "inversify"
import { IOrderRepository, orderRepository } from "../repositories/orderRepository";
import { TYPES } from "../types/types";
import { OrderService } from "../services/orderService";
import { IPaymentProcessor, PaypalPaymentProcessor } from "../services/paymentService";
import { EmailNotifactionService, INotificationService } from "../services/emailService";

const container = new Container();

//Vinculamos la interfaces con sus implementaciones
container.bind<IOrderRepository>(TYPES.IOrderRepository).to(orderRepository);
container.bind<OrderService>(TYPES.OrderService).to(OrderService);
container.bind<IPaymentProcessor>(TYPES.IPaymentProcessor).to(PaypalPaymentProcessor);
container.bind<INotificationService>(TYPES.INotificationService).to(EmailNotifactionService);

export{container};