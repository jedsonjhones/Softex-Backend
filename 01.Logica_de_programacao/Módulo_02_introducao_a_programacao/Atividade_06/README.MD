Instruções do projeto

Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

# RESPOSTA
# CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")(); /* Apenas uma biblioteca para Executar o prompt no node */

function calculadora(num1, num2, operacao) { 
  if (operacao === 1) { /* 1.Soma */
    return num1 + num2;
  } else if (operacao === 2) { /* 2.Subtração */
    return num1 - num2;
  } else if (operacao === 3) { /* 3.Multiplicação */
    return num1 * num2;
  } else if (operacao === 4) { /* 4.Divisão */
    if (num2 !== 0) { /* Se o num2 for diferente de 0, sera retornado a divisão do num1 por num2  */
      return num1 / num2;
    } else { /* se num2 for 0, sera retornado 0 */
      console.log("Não existe divisão por zero"); 
      return 0;
    }
  } else {
    console.log("Essa operação não existe"); /* Caso seja digitado uma operação não existente, sera retornado 0 */
    return 0;
  }
}

// Utilizando a função:
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const operacaoDesejada = parseInt(prompt("Digite a operação desejada (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão): "));

const resultadoCalculadora = calculadora(numero1, numero2, operacaoDesejada);
console.log("Resultado:", resultadoCalculadora);
```