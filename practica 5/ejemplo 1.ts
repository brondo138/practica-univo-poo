//Generics

function identidad<T> (valor: T): T{
    return valor;
}
console.log(identidad<String>("Hola mundo"));
console.log(identidad<number>(5));

