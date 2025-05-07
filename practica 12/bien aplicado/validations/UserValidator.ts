import { User } from "../models/user";

export class UserValidator{
    static validate(user: User){
        const errors: string[]= [];

        if(!user.name.trim()){
            errors.push("El nombre no puede estar vacio");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(user.email)) {
            errors.push("El email no es valido");
        }

        if( user.age <= 0 ){
            errors.push("La edad debe ser positiva");
        }

        if (user.registrationDate > new Date()) {
            errors.push("La fecha de registro no puede ser futura");
        }

        return errors;
    }
}

// 