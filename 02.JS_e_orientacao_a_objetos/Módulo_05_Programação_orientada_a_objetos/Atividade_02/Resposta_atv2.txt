# Instruções:

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.

# RESPOSTA
Carro
Atributos: Marca,Modelo, Ano de fabricação
Métodos: Ligarr(), Desligar(), Acelerar()

Smartphone
Atributos: Marca, Modelo, Sistema operacional
Métodos: FazerLigação(numero), EnviarMensagem(conteudo, destinatario), TirarFoto()

Objetos Abstratos:
Conta Bancária
Atributos: Nome do titular, Saldo, Número da conta, Métodos:
Depositar(valor), Sacar(valor), ConsultarSaldo()

Agenda de Contatos
Atributos: Lista de contatos, Nome do proprietário, Data de criação
Métodos: AdicionarContato(contato), RemoverContato(nome), ProcurarContato(nome)

## CÓDIGO EM JS

```JS
// Objeto Carro
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anoFabricacao: 2022,
  ligado: false,

  ligar() {
    this.ligado = true;
    console.log("O carro foi ligado.");
  },

  desligar() {
    this.ligado = false;
    console.log("O carro foi desligado.");
  },

  acelerar(velocidade) {
    if (this.ligado) {
      console.log(`Acelerando a ${velocidade} km/h`);
    } else {
      console.log("Você precisa ligar o carro antes de acelerar.");
    }
  },
};

// Objeto Conta Bancária
const contaBancaria = {
  nomeTitular: "João Silva",
  saldo: 1000,
  numeroConta: "12345",

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  },

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente.");
    }
  },

  consultarSaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
  },
};

// Exemplos de uso dos objetos
carro.ligar();
carro.acelerar(60);
contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.consultarSaldo();
```




