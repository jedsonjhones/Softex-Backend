const prompt = require("prompt-sync")();

// Criação das listas vazias
let nomes = [];
let idades = [];
let coresFavoritas = [];

// Solicitar ao usuário que insira os nomes, idades e as cores favoritas
for (let i = 0; i < 10; i++) {
  const nome = prompt(`Insira o nome da pessoa ${i+1}:`);
  nomes.push(nome); /* push() adciona o elemento no fim do array em cada iteração do laço for*/

  const idade = parseInt(prompt(`Insira a idade de ${nomes[i]}:`));
  idades.push(idade);

  const corFavorita = prompt(`Insira a cor favorita de ${nomes[i]}:`);
  coresFavoritas.push(corFavorita);
}

// Imprimir as listas
console.log('Nomes:', nomes);
console.log('Idades:', idades);
console.log('Cores Favoritas:', coresFavoritas);

// Solicitar ao usuário as posições da idade e da cor que deseja modificar, e também seus novos valores
const indiceModificacaoIdade = parseInt(prompt("Digite o índice da idade que deseja modificar:"));
const novaIdade = parseInt(prompt("Digite a nova idade:"));
idades.splice(indiceModificacaoIdade, 1, novaIdade); /* Substitui o novo elemento de idade do array pelo novo elemento na posição escolhida */

const indiceModificacaoCor = parseInt(prompt("Digite o índice da cor que deseja modificar:"));
const novaCor = prompt("Digite a nova cor:");
coresFavoritas.splice(indiceModificacaoCor, 1, novaCor); /* Substitui o novo elemento de cor do array pelo novo elemento na posição escolhida */

// Imprimir as listas atualizadas
console.log('\nListas após as modificações:');
console.log('Nomes:', nomes);
console.log('Idades:', idades);
console.log('Cores Favoritas:', coresFavoritas);