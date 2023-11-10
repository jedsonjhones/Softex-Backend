# Instruções:

Crie um adaptador que permita que um objeto do tipo <b>Pato</b>  seja usado como se fosse um objeto do tipo <b> Galinha</b> 
Siga o exemplo apresentado no Hipertexto 4 e crie as classes <b>AdaptadorPato </b> e  <b>AdaptadorPatoDemo</b>  para demonstrar o uso da classe  <b>AdaptadorPato</b>

# RESPOSTA

## CÓDIGO EM JS

```JS
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

   
```



