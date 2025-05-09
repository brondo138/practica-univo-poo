import { INotificationValidator } from "../interfaces/INotificationValidator";
import { EmailValidator } from "../validators/EmailValidator";
import { PushValidator } from "../validators/PushValidator";
import { SMSValidator } from "../validators/SMSValidator";
import { Channel } from "./NotifierFactory";

export class ValidatorFactory{
    static create(channel: Channel): INotificationValidator{
        switch (channel) {
            case "email":
                return new EmailValidator();
                break;
            case "sms":
                return new SMSValidator();
                break;
            case "push":
                return new PushValidator();
                break;

            default:
                throw new Error("Validador no soportado");
                break;
        }
    }
}