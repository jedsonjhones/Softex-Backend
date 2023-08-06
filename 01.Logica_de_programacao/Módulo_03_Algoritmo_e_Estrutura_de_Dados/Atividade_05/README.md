Instruções do projeto:

Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

# RESPOSTA

Com a busca binária, a complexidade do algoritmo é O(log n), e com a busca linear complexidade é O(n), sendo "n" o número de elementos na coleção. Com isso a busca binária é mais eficiente do que a busca linear nos casos que lidamos com arrays maiores, pois podera reduzir de modo significativo o tempo de execução do código. Logo como nosso array possui um tamanho igual a 10, será mais pratico utiliza a busca binária.

# CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();

// Função que realiza a busca binária em um array ordenado
function buscaBinaria(array, elementoBuscado) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    // Calcula o índice do meio da coleção
    const meio = Math.floor((inicio + fim) / 2);

    // Verifica se o elemento do meio é igual ao elemento buscado
    if (array[meio] === elementoBuscado) {
        //Retorna o índice onde o elemento foi encontrado
      return meio; 
    }  
    // Se o elemento do meio for maior que o elemento buscado, descarta a metade á direita
    if (array[meio] > elementoBuscado) {
      fim = meio - 1; 
    } else {
        // Caso contrário, descarta a metade á esquerda
      inicio = meio + 1; 
    }
  }
  // Caso o elemento não seja encontrado, retorna -1
  return -1;
}
// Utilizando a busca binária
const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;
const indiceEncontrado = buscaBinaria(array, elementoProcurado);
if (indiceEncontrado !== -1) {
  console.log(`O elemento ${elementoProcurado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O elemento ${elementoProcurado} não foi encontrado na lista.`);
}
```