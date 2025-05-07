import { User } from "../models/user";
import { INotifier } from "../notifiers/INotifier";
import { UserValidator } from "../validations/UserValidator";

export class UserService{
    constructor(private notifer: INotifier){}

    public register(user: User): void{
        const errors = UserValidator.validate(user);
        
        if (errors.length > 0) {
            console.log("Errores al registrar el usuario: ");
            errors.forEach(element => {
                console.log("- " + element);
                return;
            });
        }

        console.log(`Usuario ${user.name} registrado correctamente`);
        this.notifer.sendNotification(user.name);
    }
}