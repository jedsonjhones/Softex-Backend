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