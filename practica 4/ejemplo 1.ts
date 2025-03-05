enum EstadoPedido {
    Pendiente,
    EnProceso,
    Completado
}

let estado: EstadoPedido = EstadoPedido.Pendiente;
console.log(estado); // output: 0
estado = EstadoPedido.EnProceso;
console.log(estado);//output: 1


type User= {
    id: number,
    name: string,
    email: string
}

let usuario1: User = {id: 1, name: "Alex Lovos", email: "lovosalex0@gmail.com"};
console.log(usuario1);