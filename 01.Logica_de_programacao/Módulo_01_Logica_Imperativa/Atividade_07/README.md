# Instruções do projeto:
<br>
Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

![PeerTutoringExtra_LogicaImperativa_02](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/0347e1b7-c2ba-4609-84df-b83969865dd0)

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.

# RESPOSTA
<br>
Algoritmo "tabuada" <br>
<br>

    var
      numero, contador: inteiro

    inicio
      escreva("Digite o número que deseja verificar a tabuada: ")
      leia(numero)
   
      para contador de 0 ate 10 faca
        escreva(numero, " x ", contador, " = ", numero * contador)
      fimpara
    fim
