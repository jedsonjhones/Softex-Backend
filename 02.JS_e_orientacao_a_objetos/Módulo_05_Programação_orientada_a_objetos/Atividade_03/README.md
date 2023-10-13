# Instruções:

Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção.

# RESPOSTA

## CÓDIGO EM JS

```JS
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
```



