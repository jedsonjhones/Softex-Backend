const prompt = require("prompt-sync")();

class Sanduiche {
  custo() {
    throw new Error('Método não implementado');
  }

  descricao() {
    throw new Error('Método não implementado');
  }
}

class FrangoAssado extends Sanduiche {
  custo() {
    return 4.50;
  }

  descricao() {
    return 'Sanduíche de Frango Assado';
  }
}

class Pepperoni extends Sanduiche {
  constructor(sanduiche) {
    super();
    this._sanduiche = sanduiche;
  }

  custo() {
    return this._sanduiche.custo() + 0.99;
  }

  descricao() {
    return this._sanduiche.descricao() + ', Pepperoni';
  }
}

class QueijoMussarelaRalado extends Sanduiche {
  constructor(sanduiche) {
    super();
    this._sanduiche = sanduiche;
  }

  custo() {
    return this._sanduiche.custo() + 2.00;
  }

  descricao() {
    return this._sanduiche.descricao() + ', Queijo Mussarela Ralado';
  }
}


const sanduicheFrangoAssado = new FrangoAssado();

const sanduicheComPepperoni = new Pepperoni(sanduicheFrangoAssado);

const sanduicheFinal = new QueijoMussarelaRalado(sanduicheComPepperoni);

console.log(`${sanduicheFinal.descricao()} custa $${sanduicheFinal.custo().toFixed(2)}.`);
   