import { INotificationValidator } from "../interfaces/INotificationValidator";

export class PushValidator implements INotificationValidator{
    validate(message: string): string[] {
        const errors:string[] = []
        
        if (!message.trim()) errors.push("El mensaje no debe estar vacio");
        return errors;
    }
}