interface Operacion{
    calcular(a: number, b: number):number;
}

class Suma implements Operacion{
    calcular(a: number, b: number): number {
        return a+b; 
    }
}

class Restar implements Operacion{
    calcular(a: number, b: number): number {
        return a-b;
    }
}

class Multi implements Operacion{
    calcular(a: number, b: number): number {
        return a*b;
    }
}

class Division implements Operacion{
    calcular(a: number, b: number): number {
        if (a != 0 && b!= 0){
            return a/b;
        }
        return Infinity;
    }
}

function operar(operacion: Operacion, a: number, b: number){
    return operacion.calcular(a,b)
}

const suma = new Suma();
const resta = new Restar();
const multi = new Multi();
const division = new Division();

console.log(operar(suma,1,3));
console.log(operar(resta,1,3));
console.log(operar(multi,1,3));
console.log(Number(operar(division,1,3).toFixed(2)));