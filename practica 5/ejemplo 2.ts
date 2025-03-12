class Caja<T>{
    constructor(private contenido: T){}

    obtenerContenido(): T{
        return this.contenido;
    }
}

const cajaGenerica1 = new Caja<number>(100);
const cajaGenerica2 = new Caja<string>("Hola mundo");

console.log(cajaGenerica1.obtenerContenido());
console.log(cajaGenerica2.obtenerContenido());