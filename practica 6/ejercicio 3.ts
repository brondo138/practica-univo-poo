abstract class Vehiculo{
    constructor(public modelo: string){}

    abstract acelerar():void;
}

class VehiculoCombustion extends Vehiculo{
    acelerar(): void {
        console.log(`${this.modelo} esta acelerando con combustible de combustion`);
    }
}

class VehiculoElectrico extends Vehiculo{
    acelerar(): void {
        console.log(`${this.modelo} esta acelerando con electricidad`);
    }
}

function seleccionarVehiculo(vehiculo: Vehiculo){
    vehiculo.acelerar();
}

seleccionarVehiculo(new VehiculoCombustion("Toyota Yaris"));
seleccionarVehiculo(new VehiculoElectrico("Tesla Model 3"));
