# Instruções:

Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. <br>
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.

# RESPOSTA

## CÓDIGO EM JS
```JS
// Código que verifica se o aluno reprovou ou não com base em suas três notas
const prompt = require("prompt-sync")();

// Recebe as três notas do aluno
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;
const situacao = media < 6 ? "Reprovado" : "Aprovado";

console.log("Situação do aluno:", situacao);
```
##
```JS
// Código que calcula a nota mínima necessária na última prova para passar com media sete
const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

const somaNotas = nota1 + nota2;
// Calcula a nota mínima necessária
const notaMinima = (21 - somaNotas);

console.log("Para passar com nota sete, você precisa tirar pelo menos:", notaMinima);
```




