Instruções do projeto:

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

# RESPOSTA

![Resposta_atv05](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/9ec72194-4e6f-4ca7-93ad-956a25f63fc7)




# CÓDIGO EM JS

```JS
var segundos;

segundos = 10;
window.alert('Iniciando contagem regressiva');
while (segundos > 0) {
  window.alert(['Faltam ',segundos,' segundos'].join(''));
  segundos = segundos - 1;
}
window.alert('BUM!');
```
