const prompt = require('prompt-sync')();

function pedirNumero(mensaje) {
  return Number(prompt(mensaje));
}

function calcular(numA, operacion, numB) {
  if (operacion === '+') {
    return numA + numB;
  } else if (operacion === '-') {
    return numA - numB;
  } else if (operacion === '*') {
    return numA * numB;
  } else if (operacion === '/') {
    if (numB === 0) {
      return "No se puede dividir entre 0";
    }
    return numA / numB;
  } else {
    return "Operación no válida";
  }
}

function mostrarResultado(resultado) {
  console.log(`Resultado: ${resultado}`);
}

function atenderOperacion() {
  const numA = pedirNumero("Ingresa el primer número: ");
  const operacion = prompt("Ingresa la operación (+, -, *, /): ");
  const numB = pedirNumero("Ingresa el segundo número: ");

  const resultado = calcular(numA, operacion, numB);
  mostrarResultado(resultado);
}

let activo = true;

while (activo) {
  atenderOperacion();
  const respuesta = prompt("¿Deseas realizar otra operación? (s/n): ");
  if (respuesta.toLowerCase() !== 's') {
    activo = false;
  }
}

console.log("Gracias por usar el cajero.");