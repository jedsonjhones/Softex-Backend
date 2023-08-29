# Instruções:

Crie um código com um objeto chamado **"Banco"**. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta. 
observações:
- **busca saldo** deve retornar o valor atual do saldo;
- para o **deposito** , você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; 
- para o **saque** , você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; 
- o **numero da conta**  deve retornar o número da conta.

# RESPOSTA

## CÓDIGO EM JS

```JS
const prompt = require("prompt-sync")();
// Função com o objeto Banco e seus parâmetros
function Banco(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
}
// Método para buscar o saldo atual da conta
/* .prototype foi utilziado para atribuir o método ao protótipo do objeto, para que todos os objetos criados a partir dessa função compartilhem
 os mesmos métodos, não sendo necessario utiliza metodos de escopo globais */
Banco.prototype.buscarSaldo = function () {
    return this.saldo;
}
// Método para realizar um depósito na conta
Banco.prototype.deposito = function (valor) {
    this.saldo = this.saldo + valor;
    return this.saldo;

}

// Método para realizar um saque na conta
Banco.prototype.saque = function (valor) {
    this.saldo = this.saldo - valor;
    return this.saldo;

}
// Método para obter o número da conta
Banco.prototype.numeroDaConta = function () {
    return this.conta;
}
// Utilizando
const minhaConta = new Banco("123456789", 2000, "Corrente", "5555");

console.log("Número da conta:", minhaConta.numeroDaConta());
console.log("Saldo inicial:", minhaConta.buscarSaldo());
minhaConta.deposito(2300);
console.log("Saldo após depósito:", minhaConta.buscarSaldo());
minhaConta.saque(200);
console.log("Saldo após saque:", minhaConta.buscarSaldo());

```



