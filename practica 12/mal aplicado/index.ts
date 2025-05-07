class Userww{
    name: string;
    email:string;
    age: number;
    registrationDate: Date;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
        this.registrationDate = new Date();
    }
}

class UserManager{
    register(user: User, notificationType: string){
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

        if (errors.length > 0) {
            console.log("Errores al registrar el usuario");
            errors.forEach(element => {
                console.log("- " + element);
                return;
            });
        }

        console.log((`Usuario: ${user.name} registrado correctamente`));

        if(notificationType === "email"){
            console.log(`enviado notificacion por email a: ${user.name}`);
            console.log(`Bienvenido ${user.name}, gracias por registrarte`);
        } else if (notificationType === "sms"){
            console.log(`enviado notificacion por sms a: ${user.name}`);
            console.log(`Bienvenido ${user.name}, gracias por registrarte`);
        }else{
            console.log("Tipo de notificacion no soportada");
        }
    }
}

const userManager = new UserManager();
const user1 = new User("Alex", "lovosalex0@gmail.com", 22);
userManager.register(user1, "sms");
console.log("\n------------------------------\n");
const user2 = new User("","no email perro", -4);
userManager.register(user2, "sms");