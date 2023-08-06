# Instruções do projeto:

Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

![PeerTutoringExtra_LogicaImperativa_01](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/9f01e66f-7628-42b3-97af-5558af7f3b6d)


Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões: <br>
(   )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim) <br>
(   )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não) <br>
(   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim) <br>
(   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não) <br>

# Resposta:
<br>
( V )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim) <br>
V And V And V = Verdadeiro <br>
<br>
( F )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não) <br>
F And V And V = Falso <br>
<br>
( V ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim) <br>
F Or F Or V = Verdadeiro <br>
<br>
( V ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não) <br>
V Or V Or Not V = Verdadeiro <br>
