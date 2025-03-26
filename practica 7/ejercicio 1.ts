interface Printable{
    print(): void;
}

interface Scannerable{
    scan(): void;
}

class Printer implements Printable{
    print(): void {
        console.log("Impresora: Imprimiendo...");
    }
}

class Scanner implements Scannerable{
    scan(): void {
        console.log("Escaner: Escaneando...");
    }
}

class Multifunction implements Printable, Scannerable{
    print(): void {
        console.log("Multi: Imprimiendo...");
    }

    scan(): void {
        console.log("Multi: Escaneando...");
    }
}

const printer = new Printer();
const scanner = new Scanner();
const multifunction = new Multifunction();

printer.print();
scanner.scan();
multifunction.print();
multifunction.scan();