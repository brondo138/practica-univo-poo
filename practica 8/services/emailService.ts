import { injectable } from "inversify";

export interface INotificationService{
    sendNotifaction(message: string): void;
}

@injectable()
export class EmailNotifactionService implements INotificationService{
    sendNotifaction(message: string): void {
        console.log(`Enviando Email: ${message}`);
    }
}

