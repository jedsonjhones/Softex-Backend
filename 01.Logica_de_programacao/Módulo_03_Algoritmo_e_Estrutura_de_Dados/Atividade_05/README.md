Instruções do projeto:

Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

# RESPOSTA

Com a busca binária, a complexidade do algoritmo é O(log n), e com a busca linear complexidade é O(n), sendo "n" o número de elementos na coleção. Com isso a busca binária é mais eficiente do que a busca linear nos casos que lidamos com arrays maiores, pois podera reduzir de modo significativo o tempo de execução do código.

Mas a busca binária só pode ser utilizada em arrays ordenados. Claro que poderíamos utilizar o método sort() para ordenar nosso array antes de utilizar a função, mas isso iria aumentar um pouquinho a complexidade do nosso código, e com isso aumentando um pouco o tempo de execução. Logo, como precisamos fazer uma única busca, em um array que não está ordenado, a busca linear será mais eficiente.


# CÓDIGO EM JS

```JS
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
```
