const prompt = require("prompt-sync")();

// Uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro; 
function iniciandoCalculadora() {
  console.log("Bem-vindo à calculadora!");
}

// Uma função tradicional com parâmetros e um retorno de valor; 
function somar(a, b) {
  return a + b;
}

// Uma arrow function com parâmetros e que retorne um valor.
const subtrair = (a, b) => a - b;

// Chamando as funções
iniciandoCalculadora();
const num1 = 42;
const num2 = 8;

const resultadoSoma = somar(num1, num2);
console.log(`A soma de ${num1} e ${num2} é ${resultadoSoma}`);

const resultadoSubtracao = subtrair(num1, num2);
console.log(`A subtração de ${num1} por ${num2} é ${resultadoSubtracao}`);