interface Vehiculo{
    acelerar():void;
    frenar():void;
}

class Auto implements Vehiculo{
    
    acelerar(): void {
        console.log("El auto esta acelerando");
    }

    frenar(): void {
        console.log("El auto esta frenando");
    }
}

const auto = new Auto();

auto.acelerar();
auto.frenar();