import { inject, injectable } from "inversify";

export interface IPaymentProcessor{
    processPayment(amount: number): void;
}

@injectable()
export class PaypalPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Pago procesado con Paypal: $${amount}`);
    }
}

@injectable()
export class CreditCardPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Pago procesado con Tarjeta de Credito: $${amount}`);
    }
}