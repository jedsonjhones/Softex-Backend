const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

try {
    // Código que pode lançar uma exceção
    console.log(numero1 / numero2);
} catch (error) {
    console.error(`Ocorreu um erro: ${error.message}`);
} finally {
    console.log('Bloco "finally" sempre será executado.');
}