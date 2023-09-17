const prompt = require("prompt-sync")();

function NumeroComplexo(real, imaginario) {
    this.real = real;
    this.imaginario = imaginario;
  }
   // Método para somar
  NumeroComplexo.prototype.somar = function(numeroComplexo) {
    return new NumeroComplexo(
      this.real + numeroComplexo.real,
      this.imaginario + numeroComplexo.imaginario
    );
  };
   // Método para subtrair
  NumeroComplexo.prototype.subtrair = function(numeroComplexo) {
    return new NumeroComplexo(
      this.real - numeroComplexo.real,
      this.imaginario - numeroComplexo.imaginario
    );
  };
  
  // Método para multiplicar 
  NumeroComplexo.prototype.multiplicar = function(numeroComplexo) {
    return new NumeroComplexo(
      this.real * numeroComplexo.real - this.imaginario * numeroComplexo.imaginario,
      this.real * numeroComplexo.imaginario + this.imaginario * numeroComplexo.real
    );
  };
  
  // Método para imprimir
  NumeroComplexo.prototype.imprimir = function() {
    return `${this.real} + ${this.imaginario}i`;
  };
  
  const numeroComplexo1 = new NumeroComplexo(9, 4);
  const numeroComplexo2 = new NumeroComplexo(3, 6);
  
  console.log("Número Complexo 1:", numeroComplexo1.imprimir()); 
  console.log("Número Complexo 2:", numeroComplexo2.imprimir()); 
  const somaResultado = numeroComplexo1.somar(numeroComplexo2);
  console.log("Soma:", somaResultado.imprimir()); // 
  const subtracaoResultado = numeroComplexo1.subtrair(numeroComplexo2);
  console.log("Subtração:", subtracaoResultado.imprimir()); // 
  const multiplicacaoResultado = numeroComplexo1.multiplicar(numeroComplexo2);
  console.log("Multiplicação:", multiplicacaoResultado.imprimir()); // 