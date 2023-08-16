# Instruções:

Acesse pelo menos dois sites de sua preferência e os inspecione com o botão direito do mouse na página web.
Com o código fonte aberto você deve:
- Verificar no código algum elemento que utilize JavaScript;
- Marcar alguns elementos do site;
- Explicar como ele se comporta. Exemplo: entrar no site do Google, inspecionar o botão de pesquisa, verificar o código e explicar qual a finalidade do botão.

# RESPOSTA

Nas duas imagens abaixo, inspecionado o site https://calculareconverter.com.br/calculadora-de-tempo/# onde foi marcado o botão que calcula o tempo. <br>
Ao inspecionamos ele, vemos que ele chama uma função chamada calcularTempo(), ao abrirmos a função calcular tempo podemos ver que ele faz o cálculo do tempo de acordo com a operação e parâmetros passado pelo usuário, que são passados para a função através do getElementById.<br>
Alem disso a função realizar alguns tratamentos, como por exemplo o caso de não ser passado nenhum valor de tempo. Ao final é retornado o valor da operação.
![Site_02_1](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/fe925314-5ebe-4f0c-95ac-d252e0c56793)
![Site_02_2](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/11f4c4f0-a303-41f8-9109-d93a71505c3f)

##

Já nessas imagens abaixo, foi inspecionado o site https://www.4devs.com.br/calculadora_mmc  ao inspeciona o botão  “calcular IMC” podemos ver que ele chama um evento “eventList” que chama a função “calcular_mmc()” onde essa função faz solicitação AJAX para um servidor web, onde essa solicitação é feita por um URL que aponta para um arquivo chamado ferramentas_matematica.php. <br>
No código podemos ver o tipo de dados que a função espera receber, no caso é do tipo HTML, devido à definição dataType: "html". <br>
em "data()" temos o conjunto de dados que será enviado para esse servidor via AJAX. <br>
E a função data() será a função executada quando obter resposta do servidor, no caso quando for recebido o valor  retornado do MMC feita pelo arquivo apontado pelo servidor.
![Site_01](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/da5b942f-e40e-476d-ba89-ed836168cb68)
![Site_01_2](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/b313436b-9726-4670-98d3-238a02c20bd7)




