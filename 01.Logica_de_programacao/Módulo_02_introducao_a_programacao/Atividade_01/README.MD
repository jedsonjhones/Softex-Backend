# Instruções do projeto

No hipertexto anterior, temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. O fluxograma solicita 
duas notas que serão somadas, e logo em seguida a média dessas notas é calculada. Dessa forma o resultado da média quando é maior ou 
igual a 7 o aluno está APROVADO, quando menor que 7 o aluno está REPROVADO.

![fluxograma](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/f4d30879-07d8-4fcc-bed4-194118ef72a9)

Utilizando o Google Blockly construa o algoritmos que realiza esse processamento.

# RESPOSTA

![Resposta_atv01](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/2cf6e9f6-deb8-4fa9-9f79-3282f0e13818)

![Resposta_atv01_](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/6a55da47-1cec-4e03-a972-7cce5ea5b96c)

### Código em JS

```JS

var nota1, nota2, soma_das_notas, medias_das_notas;

nota1 = 9;
nota2 = 7;
 soma_das_notas = nota1 + nota2;
medias_das_notas = soma_das_notas / 2;
if (medias_das_notas >= 7) {
  window.alert('Sim, é maior ou igual a 7');
  window.alert('Aluno Aprovado');
} else {
  window.alert('Nota menor que 7');
  window.alert('Aluno Reprovado');
}
```
