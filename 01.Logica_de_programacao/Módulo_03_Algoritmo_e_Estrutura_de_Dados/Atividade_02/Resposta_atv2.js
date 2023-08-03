const prompt = require("prompt-sync")();

// Pede ao usuário quantos animais ele vai desejar por informações na matriz
const quantidadeAnimais = parseInt(prompt('Quantos animais você deseja adicionar?'));
// Cria a matriz de animais.
let matrizdeAnimais = [];
// Será inserido pelo usuário os animais e suas informações
for (let i = 0; i < quantidadeAnimais; i++) {
    console.log(`Informe as imformações do animal ${i + 1}:`);
    const nome = prompt('Digite o nome do animal:');
    const especie = prompt('Digite a espécie do animal:');
    const idade = parseInt(prompt('Digite a idade do animal:'));
    // push adicionar ao animal e suas informações na matriz
    matrizdeAnimais.push([nome, especie, idade]);
}
// exibir todos os animais e suas informações
for (let i = 0; i < matrizdeAnimais.length; i++) {
    console.log(matrizdeAnimais[i])
}