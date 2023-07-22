Desenvolva, utilizando o Google Blockly, um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.

# RESPOSTA





# CÓDIGO

'''JS
var nomeAluno, nota1, nota2, faltas, somaNotas, media;


nomeAluno = 'Dudu';
nota1 = 8;
nota2 = 7;
faltas = 2;
somaNotas = nota1 + nota2;
media = somaNotas / 2;
if (media < 7 || faltas > 3) {
  window.alert(String(nomeAluno) + ' está reprovado');
} else {
  window.alert(String(nomeAluno) + ' está aprovado');

'''