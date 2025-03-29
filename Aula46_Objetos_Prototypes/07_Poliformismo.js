function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

// Criar os metodos de depositar, sacar e verSaldo usando o prototype
// O prototype é um objeto que é associado a todos os objetos criados a partir de uma função construtora
// O prototype é usado para adicionar métodos e propriedades a todos os objetos criados a partir da função construtora
// O prototype é uma forma de herança em JavaScript
Conta.prototype.depositar = function (valor) {
  this.saldo += valor
  return this.saldo
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo >= valor) {
    this.saldo -= valor
    return true
  }
  return false
}
Conta.prototype.verSaldo = function () {
  return `Ag: ${this.agencia} | Conta: ${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo)
  this.tipo = 'Conta Corrente'
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite >= valor) {
    this.saldo -= valor
    return true
  }
  return false
}

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo)
  this.tipo = 'Conta Pouança'
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

// const conta1 = new Conta(1234, 56789, 1000)
// conta1.depositar(500)
// conta1.sacar(200)
// console.log(conta1.verSaldo())

const cc = new ContaCorrente(1234, 56789, 1000, 500)
cc.depositar(500)
cc.sacar(1600)
console.log(cc.verSaldo())

const cp = new ContaPoupanca(1234, 56789, 0)
cp.depositar(500)
cp.sacar(500)
console.log(cp.verSaldo())