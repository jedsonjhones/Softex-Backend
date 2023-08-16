# Instruções:

Acesse pelo menos dois sites de sua preferência e os inspecione com o botão direito do mouse na página web.
Com o código fonte aberto você deve:
- Verificar no código algum elemento que utilize JavaScript;
- Marcar alguns elementos do site;
- Explicar como ele se comporta. Exemplo: entrar no site do Google, inspecionar o botão de pesquisa, verificar o código e explicar qual a finalidade do botão.

# RESPOSTA

Nas duas imagens acima, inspecionado o site https://calculareconverter.com.br/calculadora-de-tempo/# onde foi marcado o botão que calcula o tempo. Ao inspecionamos ele vermo que ele chama uma função chamada calcularTempo(), ao abrirmos a função calcular tempo podemos ver que ele faz o cálculo do tempo de acordo com a operação e parâmetros passado pelo usuário, que são passados para a função através do getElementById.Alem disso a função realizar alguns tratamentos, como por exemplo o caso de não ser passado nenhum valor de tempo. Ao final é retornado o valor da operação.


Já nessas imagens acima, foi inspecionado o site https://www.4devs.com.br/calculadora_mmc , ao inspeciona o botão  “calcular IMC” podemos ver que ele chama um evento “eventList” que chama a função “calcular_mmc()” onde essa função faz solicitação AJAX para um servidor web, onde essa solicitação é feita por um URL que aponta para um arquivo chamado ferramentas_matematica.php.
No código podemos ver o tipo de dados que a função espera receber, no caso é do tipo HTML, devido à definição dataType: "html".
em data()... temos o conjunto de dados que será enviado para esse servidor via AJAX
e a função data() será a função executada quando obter resposta do servidor, no caso quando for recebido o valor  retornado do MMC feita pelo arquivo apontado pelo servidor.




