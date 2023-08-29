const prompt = require("prompt-sync")();

// Código que calcula a nota mínima necessária na última prova para passar com media sete
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

const somaNotas = nota1 + nota2;
const notaMinima = (21 - somaNotas);

console.log("Para passar com nota sete, você precisa tirar pelo menos:", notaMinima);