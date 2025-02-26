interface Persona{
    showInfo():void;
}


class Adulto implements Persona {
    constructor(public nombre: string, public edad: number){}

    showInfo(): void {
        console.log(`Datos del usuario
Nombre: ${this.nombre}
Edad: ${this.edad}`)
    }
}

const adulto = new Adulto("Alex Lovos", 22)

adulto.showInfo();