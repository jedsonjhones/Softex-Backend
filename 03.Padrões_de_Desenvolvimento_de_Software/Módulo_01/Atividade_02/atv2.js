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