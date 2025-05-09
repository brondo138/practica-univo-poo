import { INotificationValidator } from "../interfaces/INotificationValidator";
import { INotifier } from "../interfaces/INotifier";

export class NotificacionService{
    constructor(private notifier: INotifier, private validator: INotificationValidator){}

    notify(message: string){
        const errors = this.validator.validate(message);

        if (errors.length >0) {
            console.log(`Errores en la validacion:`);
            errors.forEach(element => {
                console.log(" -"+ element);
            });
            return;
        }

        try {
            this.notifier.send(message);
            console.log("Notificacion enviada con exito");
        } catch (error) {
            console.error("Error al enviar la notificacion: ", error);
        }
    }
}