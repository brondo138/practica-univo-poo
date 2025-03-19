class Empleado{
    constructor(public nombre: string, public salarioBase: number){}

    calcularSalario(): number{
        let calcular = Number((this.salarioBase*1.1).toFixed(2) )
        return calcular;
    }
}

class ReporteEmpleado{
    generar(empleado: Empleado):string{
        return `Empleado: ${empleado.nombre}, salario: ${empleado.calcularSalario()}`;
    }
}

const empleado = new Empleado("Alex Lovos", 1000);
const reporte = new ReporteEmpleado();

console.log(`${reporte.generar(empleado)}`);