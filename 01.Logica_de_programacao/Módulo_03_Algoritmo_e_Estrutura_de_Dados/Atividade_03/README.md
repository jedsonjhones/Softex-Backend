Instruções do projeto:

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

# RESPOSTA

Assim, a sequência de números removidos para cada uma das estruturas de dados (fila, lista e pilha) ao utilizar o array [3, 7, 9, 1, 0] seria:

1. **Fila:**
   
   Na fila, o primeiro elemento que foi inserido é o primeiro a ser removido.
   Assim é utilizado o método shift() para remover o primeiro elemento que havia sido inserido na frente da fila.
  - Inserção: `3 -> 7 -> 9 -> 1 -> 0`
  - Remoção: Primeiro `3` é removido, depois `7`, em seguida `9`, seguido por `1` e, por fim, `0`.

2. **Lista:**
   
   Na lista, a remoção pode ocorrer em qualquer ordem,pois é removido o elemento específico definido na posição em que ele se encontra, 
   não importando a ordem.
   Assim podemos usar o método splice() para remover o elemento específico, não importando a ordem, o método removerá o elemento na 
   posição que ele se encontrar.
  - Inserção: `3 -> 7 -> 9 -> 1 -> 0`
  - Remoção: Poderá ocorrer em qualquer ordem.


3. **Pilha:**
   
   Na pilha, o último elemento inserido é o primeiro a ser removido.
   Assim podemos utilizar o método pop() para remover o último elemento da pilha.
  - Inserção: `3 -> 7 -> 9 -> 1 -> 0`
  - Remoção: Último `0` é removido primeiro, depois `1`, em seguida `9`, seguido por `7` e, por fim, `3`.


Logo, a sequência dos números removidos em cada uma das estruturas de dados seria:

1. **Fila:** `3, 7, 9, 1, 0`
2. **Lista:** Pode variar dependendo da implementação utilizada.
3. **Pilha:** `0, 1, 9, 7, 3`
