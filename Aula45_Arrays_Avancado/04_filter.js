// Filter vai filtrar um valor do array

// Retornar os números maior que 10
const numeros = [5, 50, 80, 2, 1, 3, 5, 8, 7, 11, 15, 22, 27]

const maiorquedez = numeros.filter((n) => n > 10)
console.log(maiorquedez)

const pessoas = [
  { nome: 'Luiz', idade: 10 },
  { nome: 'Maria', idade: 34 },
  { nome: 'Eduardo', idade: 54 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 30 },
  { nome: 'Wallace', idade: 40 },
]

const pessoasNomeMaiorCincoLetra = pessoas.filter((p) => p.nome.length >= 5)
console.log(pessoasNomeMaiorCincoLetra)
console.log("----------------------------");
const pessoasMaiorCinquentaAno = pessoas.filter((p) => p.idade > 50)
console.log(pessoasMaiorCinquentaAno);
console.log("----------------------------");
const ultimaLetraA = pessoas.filter((p) => p.nome.toLowerCase().endsWith('a'))
console.log(ultimaLetraA);