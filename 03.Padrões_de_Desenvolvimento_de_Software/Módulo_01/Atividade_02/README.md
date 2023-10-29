# Instruções:

Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:

<div><br><div>- implemente uma classe abstrata<b> Veículo</b> com um construtor padrão e os métodos clone e<i> represent;&nbsp;</i></div>
<div>- o construtor da classe <b>Veículo </b>deve receber <b>modelo, marca, cor</b> e<b> numeroRodas</b> como parâmetros;&nbsp;</div>
<div>- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como<b> numeroRodas</b> e <b>numeroPortas</b>;&nbsp;</div>
<div>- desenvolva uma classe <b>Aplicação</b> que deve criar um <i>array</i> com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o <i>array</i>;&nbsp;</div>
<div>- na classe Aplicação, implemente um método que retorne um <i>array</i> com o mesmo tamanho do <i>array</i> de veículos, onde cada elemento deve ser um clone dos elementos do <i>array</i> veículos;&nbsp;</div>
<div>- no final, deve imprimir na tela o retorno da função<i> represent</i> de cada elemento desse novo <i>array</i> de clones de veículos.&nbsp;</div>


# RESPOSTA

## CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();

class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
  }

  clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
  }
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
  }

  clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
      return `${super.represent()}, Portas: ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindradas) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
  }

  clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
      return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
  }
}

class Aplicacao {
  static criarVeiculos() {
      const veiculos = [];
      const veiculo1 = new Carro("toro", "Toyota", "Azul", 4, 4);
      const veiculo2 = new Carro("gol", "Volkswagen", "Prata", 4, 2);
      const veiculo3 = new Moto("uno", "Honda", "Vermelha", 2, 900);
      const veiculo4 = new Moto("4x4", "Ferrari", "Preto", 2, 2000);
      veiculos.push(veiculo1, veiculo2, veiculo3, veiculo4);
      return veiculos;
  }

  static clonarVeiculos(veiculos) {
      const clones = veiculos.map(veiculo => veiculo.clone());
      return clones;
  }

  static imprimirVeiculos(veiculos) {
      veiculos.forEach(veiculo => {
          console.log(veiculo.represent());
      });
  }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);
Aplicacao.imprimirVeiculos(clones);
```



