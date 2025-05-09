import { INotificationValidator } from "../interfaces/INotificationValidator";

export class SMSValidator implements INotificationValidator{
    validate(message: string): string[] {
        const errors:string[] = []
        
        if (message.length > 160) errors.push("El mensaje no debe exceder el limite de 160 caracteres");
        return errors;
    }
}