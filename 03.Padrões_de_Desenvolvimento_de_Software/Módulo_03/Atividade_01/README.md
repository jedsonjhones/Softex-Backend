# Instruções:

Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são: 
- implementar uma interface <i>Strategy</i>  com o método abstrato <b>execute()</b> . Deve haver três classes concretas que implementam a <i>Strategy</i>  para realizar as operações de <b>Soma</b> , <b>Subtração</b> e <b>Multiplicação</b>  de números inteiros; 
- o método <b>execute()</b>  deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro; 
- como <i>input</i>  do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar; 
- no final, a aplicação deve definir qual <i>Strategy</i>  será usada, com base na operação informada, e imprimir o resultado da operação. 

# RESPOSTA

## CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();

class OperationStrategy {
  execute(num1, num2) {}
}

class AddOperation extends OperationStrategy {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class SubtractOperation extends OperationStrategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class MultiplyOperation extends OperationStrategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

class Calculator {
  constructor(operationStrategy) {
    this.operationStrategy = operationStrategy;
  }

  setOperationStrategy(operationStrategy) {
    this.operationStrategy = operationStrategy;
  }

  calculate(num1, num2) {
    return this.operationStrategy.execute(num1, num2);
  }
}

const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const operation = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");

let strategy;

switch (operation) {
  case '+':
    strategy = new AddOperation();
    break;
  case '-':
    strategy = new SubtractOperation();
    break;
  case '*':
    strategy = new MultiplyOperation();
    break;
  default:
    console.log("Operação inválida");
    process.exit(1);
}

const calculator = new Calculator(strategy);
const result = calculator.calculate(num1, num2);

console.log(`Resultado da operação: ${result}`);


```



