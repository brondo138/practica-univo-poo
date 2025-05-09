import { INotifier } from "../interfaces/INotifier";

export class SMSNotifer implements INotifier{
    send(message: string): void {
        console.log(`SMS enviado: ${message}`);
    }
}