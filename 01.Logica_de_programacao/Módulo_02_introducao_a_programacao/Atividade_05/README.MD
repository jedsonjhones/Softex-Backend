# Instruções do projeto:

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

# RESPOSTA

![Resposta_atv05](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/2d167c68-0087-476f-b959-67fa5f8a0f55)




### CÓDIGO EM JS

```JS
var segundos;

segundos = 10;
window.alert(['Iniciando contagem regressiva! ',segundos,' segundos para a explosão! '].join(''));
while (segundos > 0) {
  window.alert(['Faltam ',segundos,' segundos'].join(''));
  segundos = segundos - 1;
}
window.alert('BUM!');
```
