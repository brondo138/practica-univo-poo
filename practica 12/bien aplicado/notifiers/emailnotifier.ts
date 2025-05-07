import { INotifier } from "./INotifier";

export class EmailNotifier implements INotifier{
    sendNotification(userName: string): void {
        console.log(`Bienvenido ${userName}, gracias por registrarse por email.`);
    }
}