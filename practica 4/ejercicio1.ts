enum diaSemana{
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sabado = "Sabado",
    Doming = "Domingo"
}

function obtenerDia(dia: diaSemana): string {
    return `Hoy es ${dia}`
}

let dia = diaSemana.Lunes;
console.log(obtenerDia(dia));

dia = diaSemana.Martes;
console.log(obtenerDia(dia));