const prompt = require("prompt-sync")();
/* 
A função buscaLinear recebe o array e o elemento 20, que é oquue desejamos buscar.
Ela percorre cada elemento do array utilizando o loop for e compara o elemento atual 
com o procurado.
Se achar uma correspondência, a função retorna o índice onde o elemento foi encontrado.
Caso contrario ela retorna -1 para indicar que ele não foi encontrado na coleção  
*/
// Função que realiza a busca linear em um array
function buscaLinear(array, elementoBuscado) {
  // Verifica se o elemento atual é igual ao elemento buscado
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementoBuscado) {
      // Retorna o índice onde o elemento foi encontrado
      return i; 
    }
  }
  // Caso o elemento não seja encontrado, retorna -1
  return -1; 
}

// Usando a busca linear
const listaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;

const indiceEncontrado = buscaLinear(listaNumeros, elementoProcurado);

if (indiceEncontrado !== -1) {
  console.log(`O elemento ${elementoProcurado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O elemento ${elementoProcurado} não foi encontrado na lista.`);
}
