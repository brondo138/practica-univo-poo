enum NivelAcademico{
    Primaria = "Primaria",
    Secundaria = "Secundaria",
    Universidad = "Universidad"
}

type alumno = {
    nombre: string,
    edad: number,
    nivelAcademico: NivelAcademico
}



let alumno1:alumno = {nombre: "Alex",edad: 21, nivelAcademico: NivelAcademico.Universidad}
let alumno2:alumno = {nombre: "Alex",edad: 21, nivelAcademico: NivelAcademico.Universidad}

console.log(alumno1)
console.log(alumno2)