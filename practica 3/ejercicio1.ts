abstract class Figura{
    abstract calcularArea(): number;
} 

class Circulo extends Figura{
    constructor (public radio:number){
        super();
    }

    calcularArea(): number {
        return Math.PI*Math.pow(this.radio,2)
    }
}

class Rectangulo extends Figura{
    constructor (public ladoA:number, public ladoB:number) {
        super();
    }

    calcularArea(): number {
        return this.ladoA*this.ladoB
    }
}

const circulo = new Circulo(5);
const rectangulo = new Rectangulo(5,10);

console.log(`El radio del circulo es: ${circulo.calcularArea().toFixed(2)}`);
console.log(`El radio del rectangulo es: ${rectangulo.calcularArea().toFixed(2)}`);