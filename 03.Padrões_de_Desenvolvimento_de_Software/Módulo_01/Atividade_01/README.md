# Instruções:

Considere que: 
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface; 
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type; 
- há dois tipos de computadores: pc e server; - RAM e HD devem estar em GB; 
- CPU deve estar em GHz; 
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar; 
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos. 

# RESPOSTA

## CÓDIGO EM JS

```JS
// Utilizando o padrão Factory Method

const prompt = require("prompt-sync")();

// Interface para produtos (computadores)
class Computador {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    toString() {
      return `Computador Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  class FactoryComputador {
    createComputer(type, ram, hdd, cpu) {
      if (type === 'pc') {
        return new Computador(ram, hdd, cpu, 'PC');
      } else if (type === 'server') {
        return new Computador(ram, hdd, cpu, 'Server');
      } else {
        throw new Error('Tipo de computador não suportado');
      }
    }
  }
  
  const factory = new FactoryComputador();
  const pc = factory.createComputer('pc', 3, 1024, 5.4);
  const server = factory.createComputer('server', 64, 256, 1.2);
  
  console.log(pc.toString());     
  console.log(server.toString());  
```



