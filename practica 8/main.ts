import "reflect-metadata";
import { Product } from "./model/product";
import { Customer } from "./model/customer";
import { Order } from "./model/order";
import { container } from "./config/inversify.config";
import { OrderService } from "./services/orderService";
import { TYPES } from "./types/types";
import { IPaymentProcessor, PaypalPaymentProcessor } from "./services/paymentService";
import { INotificationService } from "./services/emailService";

//Crear los productos
const producto1 = new Product(1,"Laptop",1200);
const producto2 = new Product(2,"Mouse Logitech G503 Hero",75);

//Crear el cliente
const customer = new Customer(1, "Alex Lovos","lovosalex0@gmail.com");

//Crar Pedido
const order = new Order(1,customer,[producto1,producto2], producto1.price + producto2.price)

//obtener los objetos desde el contenedor inversify
const orderService = container.get<OrderService>(TYPES.OrderService);
const paymentProcessor = container.get<IPaymentProcessor>(TYPES.IPaymentProcessor);
const notificationService = container.get<INotificationService>(TYPES.INotificationService);

//Procesar pedido
orderService.placeOrder(order);
paymentProcessor.processPayment(order.total);
notificationService.sendNotifaction(`Pedido #${order.id} confirmado para entregar a ${order.customer.name}`)