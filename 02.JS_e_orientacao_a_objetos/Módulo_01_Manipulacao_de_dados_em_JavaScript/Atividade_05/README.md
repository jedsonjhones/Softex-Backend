# Instruções:

A atividade que faremos é a da “calculadora de média”. Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.


Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função * prompt() * . Elas devem ser armazenadas em variáveis adequadas, por exemplo, * nota1, nota2 e nota 3 *, com o tipo de dado Number. Depois, some-as e as divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada *media* . Por fim, exiba esse valor no console usando a função * console.log() *

# RESPOSTA

## CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();

// Solicitação das notas ao usuário
var nota1 = Number(prompt("Digite a primeira nota (entre 0 e 10):"));
var nota2 = Number(prompt("Digite a segunda nota (entre 0 e 10):"));
var nota3 = Number(prompt("Digite a terceira nota (entre 0 e 10):"));

// Verificando se as notas estão dentro do intervalo pedido na questão (entre 0 e 10)
if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
// Calculando a média das notas
    var media = (nota1 + nota2 + nota3) / 3;

// Exibindo o resultado
    console.log("A média das notas é: " + media);
} else {
    console.log("As notas que foram inseridas não estão no intervalo válido (entre 0 e 10).");
}

```




