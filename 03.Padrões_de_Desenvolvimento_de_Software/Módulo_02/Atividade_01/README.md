# Instruções:

Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49. 
- o sanduíche de frango assado custa $4,50.
- o ingrediente adicional pepperoni custa $0,99. 
- o ingrediente adicional queijo mussarela ralado custa $2,00. 
- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado. 

# RESPOSTA

## CÓDIGO EM JS

```JS
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
   
```



