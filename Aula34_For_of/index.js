const frutas = ['banata', 'abacate', 'uva']

const pessoas = {
  nome: 'Edmar',
  sobrenome: 'Siqueira',
  idade: 30,
}

for (const key in pessoas) {
  console.log(key, pessoas[key])
}

console.log('=================')
for (const valor of frutas) {
  console.log(valor)
}

console.log('=================')

frutas.forEach((valor, indice) => {
  console.log(indice, valor)
})

// For Clássico - Geralmente com iteráveis (array ou Strings)
// For in - Retorna o indice ou chave (string, array ou Strings)
// For of - Retorna o valor em si (iteráveis, array ou Strings)
