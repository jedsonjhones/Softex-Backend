# Instruções:

Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.

# RESPOSTA

## CÓDIGO EM JS

```JS
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
```




