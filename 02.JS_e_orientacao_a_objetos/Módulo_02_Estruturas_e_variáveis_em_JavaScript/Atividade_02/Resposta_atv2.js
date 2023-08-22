const prompt = require("prompt-sync")();

function calculadora() {
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    let valor2 = parseFloat(prompt("Digite o segundo valor: "));
    let operador = prompt("Digite o operador (+, -, *, /): ");
    let resultado, sobra;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
                sobra = valor1 % valor2;
            } else {
                console.log("Divisão por zero não é permitida");
                return;
            }
            break;
        default:
            console.log("O operador digitador é inválido");
            return;
    }

    if (operador === '/') {
        console.log("Resultado: " + resultado);
        console.log("Sobra: " + sobra);
    } else {
        console.log("Resultado: " + resultado);
    }
}

calculadora();