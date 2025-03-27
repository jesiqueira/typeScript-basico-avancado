// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)
const numeros = [5, 50, 80, 2, 1, 3, 5, 8, 7, 11, 15, 22, 27]

const numeroPares = numeros.filter((valor) => valor % 2 === 0)
const doobro = numeroPares.map((valor) => valor * 2)
const total = doobro.reduce((acumulador, valor) => acumulador + valor)

// console.log(numeroPares)
// console.log(doobro)
console.log(total)

const totalPares = numeros.filter((valor) => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor)
console.log(totalPares)
