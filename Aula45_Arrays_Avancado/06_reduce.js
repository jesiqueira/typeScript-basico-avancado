// usado para reduzir uma lista a um único valor
// não usar reduce como filter ou map

// Some todos os números (reduce)
// Retorne um array com os pares (Filter) 
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 2, 1, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor
  return acumulador
}, 0)
// console.log(total)

// retorne a pessoal mais velha
const pessoas = [
  { nome: 'Luiz', idade: 10 },
  { nome: 'Maria', idade: 34 },
  { nome: 'Eduardo', idade: 54 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 30 },
  { nome: 'Wallace', idade: 40 },
]

const maisVelha = pessoas.reduce((acumulador, valor) =>{
  if(acumulador.idade > valor.idade) return acumulador
  return valor
})
console.log(maisVelha);