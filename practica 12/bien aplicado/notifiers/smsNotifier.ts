import { INotifier } from "./INotifier";

export class SMSNotifier implements INotifier{
    sendNotification(userName: string): void {
        console.log(`Bienvenido ${userName}, gracias por registrarse por sms`);
    }
}