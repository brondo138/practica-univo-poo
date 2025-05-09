import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier{
    send(message: string): void {
        console.log(`Email enviado: ${message}`);
    }
}