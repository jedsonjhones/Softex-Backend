const prompt = require("prompt-sync")();

// Cadastro de Pessoas
// Definição das variáveis. Dados das pessoas.
let nome = "Eduardo Pereira Rodrigues";       /* Tipo: String */
let salario = 2900.50;         /* Tipo: Number (ponto flutuante) */
let idade = 29;                /* Tipo: Number (inteiro) */
let possuiDiploma = true;      /* Tipo: Boolean */
// Verificação dos tipos de dados
console.log("Tipo da variavel nome: " + typeof nome);         // Saída: string
console.log("Tipo da variavel salario: " +typeof salario);      // Saída: number
console.log("Tipo da variavel idade: " +typeof idade);        // Saída: number
console.log("Tipo da variavel possuiDiploma: " + typeof possuiDiploma);// Saída: boolean

// Exibição os dados da pessoa
console.log("Nome: " + nome);
console.log("Salário: R$" + salario);
console.log("Idade: " + idade + " anos");
console.log("Possui Diploma: " + (possuiDiploma ? "Sim" : "Não"));