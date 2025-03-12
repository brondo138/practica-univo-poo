class Contenedor<T>{
    constructor(public contenido: T){}

    almacenar(nuevoValor: T):void{
        this.contenido = nuevoValor;
    }

    mostrar(): T{
        return this.contenido;
    }
}

const contenedor = new Contenedor<number>(100);

let valor = 500;

contenedor.almacenar(valor);
console.log(contenedor.mostrar());;