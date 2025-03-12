class Habilidad{
    constructor(private nombre: string, private tipo:string){}
    
    usarHabilidad(): void{
        console.log(`Usando la habilidad ${this.nombre} de tipo ${this.tipo}`);
    }
}

class Personaje{
    constructor(private nombre: string, private habilidad: Habilidad){}

    ejecutarHabilidad(): void{
        console.log(`${this.nombre}`);
        this.habilidad.usarHabilidad();
    }
}

const habilidad = new Habilidad("Llamarada","Fuego");
const personaje = new Personaje("Charizard",habilidad);

personaje.ejecutarHabilidad();