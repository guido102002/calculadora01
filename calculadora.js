console.log("calculadora")

const input = require('prompt-sync')();

let ejecutando = true;
let totalOperaciones = 0;

while (ejecutando) {
    let numA = Number(input("Ingresa el primer número: "));
    while (isNaN(numA)) {
        numA = Number(input("Entrada no válida. Ingresa un primer número correcto: "));
    }

    const op = input("Ingresa la operación (+, -, *, /): ");

    let numB = Number(input("Ingresa el segundo número: "));
    while (isNaN(numB)) {
        numB = Number(input("Entrada no válida. Ingresa un segundo número correcto: "));
    }

    if (op === "+") {
        console.log("Resultado:", numA + numB);
        totalOperaciones++;
    } else if (op === "-") {
        console.log("Resultado:", numA - numB);
        totalOperaciones++;
    } else if (op === "*") {
        console.log("Resultado:", numA * numB);
        totalOperaciones++;
    } else if (op === "/") {
        if (numB === 0) {
            console.log("Error: No se puede dividir entre cero.");
        } else {
            console.log("Resultado:", numA / numB);
            totalOperaciones++;
        }
    } else {
        console.log("Operación no válida.");
    }

    const opcion = input("¿Deseas realizar otra operación? (si/no): ").toLowerCase();
    if (opcion === "no") {
        ejecutando = false;
    }
}

console.log(`Sesión finalizada. Total de operaciones realizadas: ${totalOperaciones}`);