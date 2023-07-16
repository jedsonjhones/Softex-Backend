Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.


Var
resposta : caractere

Inicio
escreva("Seu veiculo é terrestre? sim ou não?")
leia(resposta)
   se(resposta == "sim") entao {
   escreva("Seu veiculo cabe apenas 1 pessoa? sim ou não?")
   leia(resposta)
         se(resposta == "sim") entao {
         escreva("Seu veiculo é pesado? sim ou não?")
         leia(resposta)
              se(resposta == "sim") entao {
              escreva("Seu veiculo é um trator")              
} senao
  escreva("Não foi possivel descobrir seu veiculo")
   } senao 
     escreva("usa capacete? sim ou não?")
     se(resposta == "sim") entao {
     escreva("Seu veiculo é uma moto")
     }
     senao
     escreva("Não foi possivel descobrir seu veiculo")
       
        }
        senao
        escreva("Seu veiculo é uma moto")
fimse
fimse
fimse
fimse
             
  


