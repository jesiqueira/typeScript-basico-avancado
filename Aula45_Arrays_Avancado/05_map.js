const numeros = [5, 50, 80, 2, 1, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDoblo = numeros.map((n) => n * 2)
console.log(numerosEmDoblo)

const pessoas = [
  { nome: 'Luiz', idade: 10 },
  { nome: 'Maria', idade: 34 },
  { nome: 'Eduardo', idade: 54 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 30 },
  { nome: 'Wallace', idade: 40 },
]

const nomes = pessoas.map((p) => p.nome)
console.log(nomes)
const idades = pessoas.map((p) => ({ idade: p.idade }))
console.log(idades)

const pessoaComId = pessoas.map((obj, indice) => {
  const newObj = { ...obj }
  newObj.id = indice
  return newObj
})
console.log(pessoaComId)
