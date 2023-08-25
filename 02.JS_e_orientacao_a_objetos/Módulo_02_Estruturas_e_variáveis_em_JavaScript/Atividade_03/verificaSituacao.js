// Código que verifica se o aluno reprovou ou não com base em suas três notas
const prompt = require("prompt-sync")();

// Recebe as três notas do aluno
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;
const situacao = media < 6 ? "Reprovado" : "Aprovado";

console.log("Situação do aluno:", situacao);