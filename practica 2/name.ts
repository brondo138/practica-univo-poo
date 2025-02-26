import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Persona {
    private _edad: number;

    constructor(public nombre: string, edad: number){
        this._edad = edad;
    }

    
    public get edad() : number {
        return this._edad;
    }

    set edad(nuevaEdad: number){
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad debe ser un numero positivo.");
        }
    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
    
}

rl.question("¿Cual es tu nombre? ", (nombre) => {
    rl.question("¿Cual es tu edad? ", (edad) => {
        const persona = new Persona(nombre, parseInt(edad));
        persona.mostrarInfo();
        rl.close();
    })
});