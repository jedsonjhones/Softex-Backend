# Instruções:

vamos criar um array de objetos com, no mínimo, quatro itens. Cada um deles será composto por quatro propriedades: nome, idade, profissão e cidade.
Dessa forma declare os objetos pessoas dentro do array e, depois, desenvolva um código que utilize **for in** e **for of**  para que todos os objetos e propriedades sejam impressos.

# RESPOSTA

## CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();

const pessoas = [
    {
        nome: "Rony",
        idade: 27,
        profissão: "Jogador Atacante",
        cidade: "Pará"
    },
    {
        nome: "Dudu",
        idade: 30,
        profissão: "Jogador de Futebol",
        cidade: "Goiás"
    },
    {
        nome: "Gustavo Gomes",
        idade: 28,
        profissão: "Policial",
        cidade: "San Juan Bautista"
    },
    {
        nome: "Raphael Veiga",
        idade: 26,
        profissão: "Garçom",
        cidade: "São Paulo"
    }
];

for (const pessoa of pessoas) {
    console.log("Pessoa:");
    
    for (const propriedades in pessoa) {
        console.log(propriedades + ": " + pessoa[propriedades]);
    }
    
    console.log("######################");
}

```



