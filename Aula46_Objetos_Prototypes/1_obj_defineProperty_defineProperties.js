// defineProperty e defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  this.estoque = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: false, // pode ser deletada
    writable: false, // pode ser alterada
    configurable: false, // pode ser reconfigurada
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: false,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: false,
    },
  })
}

const p1 = new Produto('Camiseta', 20)
console.log(p1.nome)
console.log(Object.keys(p1)) // ['nome', 'preco']

for (let chave in p1) {
  console.log(chave)
}
