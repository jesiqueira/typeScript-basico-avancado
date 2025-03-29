// getters e setters
function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: false, // pode ser reconfigurada

    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Valor inválido')
      }
      estoque = valor
    },
  })
}

const p1 = new Produto('Camiseta', 20, 50)
p1.estoque = 100
console.log(p1.estoque)