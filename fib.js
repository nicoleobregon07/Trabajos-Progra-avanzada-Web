
/////////////////////////////////////////////////////
const readline = require('readline');

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerFibonacci(hasta) {
  let serie = [0, 1];
  for (let i = 2; i <= hasta; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie;
}

function mostrarResultados(n) {
  const phi = (1 + Math.sqrt(5)) / 2;
  console.log(`\nAproximación de Phi: ${phi}\n`);

  const secuencia = obtenerFibonacci(n);

  for (let i = 2; i <= n; i++) {
    let division = secuencia[i] / secuencia[i - 1];
    let error = Math.abs(phi - division);
    console.log(`Fib(${i}) / Fib(${i - 1}) ≈ ${division} [Error: ${error}]`);
  }

  console.log(`\nFib(${n}) = ${secuencia[n]}`);
  console.log(`Fib(${n - 1}) = ${secuencia[n - 1]}`);
}
///////////////////////////////////////////////////////////
entrada.question('Ingrese un número entre 2 y 45: ', (valor) => {
  const numero = parseInt(valor);

  if (isNaN(numero) || numero < 2 || numero > 45) {
    console.log('Número fuera de rango');
  } else {
    mostrarResultados(numero);
  }

  entrada.close();
});