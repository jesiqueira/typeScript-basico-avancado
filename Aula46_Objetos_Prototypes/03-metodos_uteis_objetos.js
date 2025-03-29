/*
Object.values
Object.entries
Object.assign(des, any) //Copia o objeto
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.seal (não deleta, mas altera)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)
Object.create (cria um objeto)
Object.values(produto) // retorna os valores
Object.entries(produto) // retorna as chaves e valores
Object.assign(produto, { estoque: 1000 }) // copia o objeto
*/

const produto = { nome: 'Caneca', preco: 1.8 }
// const caneca = Object.assign({}, produto)
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// console.log(produto)

// const outraCoisa = produto
// console.log(outraCoisa)
// const outro = {...produto}
// console.log(outro)

for (let [key, valor] of Object.entries(produto)) {
  // console.log(entry[0], entry[1])
  console.log(key, valor)
}
