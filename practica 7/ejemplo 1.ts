//ejemplo incorrecto de ISP

interface Workerr{
    work(): void;
    eat(): void;
}

class Developer implements Workerr{
    work(): void {
        console.log("El desarrollador esta trabajando");
    }
    eat(): void {
        console.log("El desarrollador esta comiendo");
    }
}


class Robot implements Workerr{
    work(): void {
        console.log("El robot esta trabajando");
    }
    eat(): void {
        throw new Error("El robot no puede comer");
        
    }
}

//ejemplo correcto de ISP

interface Work{
    work(): void
}

interface Eatable{
    eat(): void;
}

class DEveloper implements Work, Eatable{
    work(): void {
        console.log("El desarrollador esta trabajando");
    }
    eat(): void {
        console.log("El desarrollador esta comiendo");
    }
}

class RObot implements Work{
    work(): void {
        console.log("El robot esta trabajando");
    }
}