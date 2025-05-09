import { INotifier } from "../interfaces/INotifier"
import { EmailNotifier } from "../strategies/EmailNotifier";
import { PushNotifier } from "../strategies/PushNotifier";
import { SMSNotifer } from "../strategies/SMSNotifier";

export type Channel = "email" | "sms" | "push";


export class NotifierFactory{
    static create(channel: Channel): INotifier{
        switch (channel) {
            case "email":
                return new EmailNotifier();
                break;
            case "sms":
                return new SMSNotifer();
                break;
            case "push":
                return new PushNotifier();
                break;

            default:
                throw new Error("Canal de notificacion no soportado");
                break;
        }
    }
}