const prompt = require("prompt-sync")();


class Pato {
  quack() {
    console.log("Qua! Qua!");
  }

  voar() {
    console.log("Voando");
  }
}

class Galinha {
  cacarejar() {
    console.log("Cocoricó!");
  }

  voarCurto() {
    console.log("Voando em curtos impulsos");
  }
}

class AdaptadorPato extends Galinha {
  constructor(pato) {
    super();
    this.pato = pato;
  }

  cacarejar() {
    this.pato.quack();
  }

  voarCurto() {
    this.pato.voar(); 
  }
}

class AdaptadorPatoDemo {
  static main() {
    const pato = new Pato();
    const adaptador = new AdaptadorPato(pato);

    console.log("Pato fazendo qua e voando:");
    pato.quack();
    pato.voar();

    console.log("\nAdaptador permitindo que o pato seja usado como galinha:");
    adaptador.cacarejar();
    adaptador.voarCurto();
  }
}

AdaptadorPatoDemo.main();
   