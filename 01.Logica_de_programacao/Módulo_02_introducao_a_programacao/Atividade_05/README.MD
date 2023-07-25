Instruções do projeto:

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

# RESPOSTA





# CÓDIGO EM JS

´´´JS
var segundos;

segundos = 10;
window.alert('Iniciando contagem regressiva');
while (segundos > 0) {
  window.alert(['Faltam ',segundos,' segundos'].join(''));
  segundos = segundos - 1;
}
window.alert('BUM!');


´´´