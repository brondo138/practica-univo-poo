//Composicion

class Motor{
    encender(): void{
        console.log("El motor esta encendido");
    }
}

class Auto{
    private motor: Motor;

    constructor(){
        this.motor = new Motor();
    }

    encender(): void{
        this.motor.encender();
        console.log("El auto esta encendido");
    }
}

const auto1 = new Auto();

auto1.encender();