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
   