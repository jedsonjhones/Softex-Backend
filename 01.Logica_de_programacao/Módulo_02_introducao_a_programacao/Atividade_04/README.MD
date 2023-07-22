Instruções do projeto:

Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

# RESPOSTA





# CÓDIGO

´´´JS
var quantidadeRodas, pesoBruto, quantidadePessoas;

quantidadeRodas = 8;
pesoBruto = 3500;
quantidadePessoas = 2;
if (quantidadeRodas == 2 || quantidadeRodas == 3) {
  window.alert('Melhor categoria de habilitação: A');
} else if (quantidadeRodas == 4 && pesoBruto <= 3500 && quantidadePessoas <= 8) {
  window.alert('Melhor categoria de habilitação: B');
} else if (quantidadeRodas >= 4 && quantidadeRodas <= 8 && pesoBruto > 3500 && pesoBruto <= 6000) {
  window.alert('Melhor categoria de habilitação: C');
} else if (quantidadeRodas >= 4 && quantidadePessoas > 8) {
  window.alert('Melhor categoria de habilitação: D');
} else if (quantidadeRodas >= 4 && pesoBruto > 6000) {
  window.alert('Melhor categoria de habilitação: E');
} else {
  window.alert('Não foi possível determinar a melhor categoria de habilitação para o veículo informado.');
}

´´´