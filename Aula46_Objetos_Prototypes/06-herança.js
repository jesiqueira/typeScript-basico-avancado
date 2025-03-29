function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (percentual) {
  this.preco += (this.preco * percentual) / 100
}

Produto.prototype.desconto = function (percentual) {
  this.preco -= (this.preco * percentual) / 100
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const produto = new Produto('Tênis', 50)
camiseta.aumento(10)
console.log(camiseta)
console.log(produto)
