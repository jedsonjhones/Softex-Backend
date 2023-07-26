Instruções do projeto

Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

# RESPOSTA

![Resposta_atv07](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/0a5eb8b9-7938-4a56-a034-1f151862960d)



# CÓDIGO EM JS

```JS
var operacao, resultado, primeiroNumero, segundoNumero;

// Describe this function...
function menuLoop() {
  resultado = 0;
  while (true) {
    window.alert('Operações disponíveis:');
    window.alert('1: Soma');
    window.alert('2: Subtração');
    window.alert('3: Multiplicação');
    window.alert('4: Divisão');
    window.alert('0: Sair');
    window.alert('Digite o número para a operação correspondente:');
    operacao = Number(window.prompt('Escolha uma opção:'));
    if (operacao == 0) {
      window.alert('Saindo da calculadora');
      break;
    } else if (operacao >= 1 && operacao <= 4) {
      resultado = Calculadora(operacao);
      window.alert(resultado);
    } else {
      window.alert('Essa opção não existe.');
    }
  }
}

// Describe this function...
function Calculadora(operacao) {
  resultado = 0;
  primeiroNumero = Number(window.prompt('Digite o primeiro valor:'));
  segundoNumero = Number(window.prompt('Digite o segundo valor:'));
  if (operacao == 1) {
    resultado = primeiroNumero + segundoNumero;
  } else if (operacao == 2) {
    resultado = primeiroNumero - segundoNumero;
  } else if (operacao == 3) {
    resultado = primeiroNumero * segundoNumero;
  } else if (operacao == 4) {
    resultado = primeiroNumero / segundoNumero;
  }
  return resultado;
}


menuLoop();
```
