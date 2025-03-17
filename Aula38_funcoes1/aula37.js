// arguments é um array interno de uma função que tem todos os argumentos que foram passados para a função
// arguments é um objeto array-like, não é um array de fato, mas é parecido com um array
function funcao() {
  console.log(arguments[0])
}
console.log('-------------------');

funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function soma(a, b) {
  return a + b
}

let total = soma(1, 2)

console.log(total)
console.log('-------------------');

function criarMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador
  }
}

const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadriplica = criarMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2)) ;
