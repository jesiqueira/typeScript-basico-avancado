let nomes = ['Jose', 'Edmar', 'Siqueira']

console.log(nomes)

// remover um item sem perder o indice.
delete nomes[1]
console.log(nomes)

// spreed operation
novo = [...nomes]
console.log(novo)
novo[1] = 'Edmar'
console.log(novo)

// remover o ultimo indice do array
novo.pop()
console.log(novo)

// verificar o tamanho do array
console.log(nomes.length)
console.log(novo.length)

// remover no inicio do array, isso move o indice
nomes.shift()
console.log(nomes)

// add no array sempre no final do array
nomes.push('Lucas')
console.log(nomes)

// add no inicio do array
nomes.unshift('João')
console.log(nomes)

nomes = ['Jose', 'Edmar', 'Siqueira', 'Lucas', 'Adeguimar']
console.log(nomes)

// pegar um intervalo
const novo1 = nomes.slice(0, -1)
console.log(novo1)

const nomeCompleto = 'Jose Edmar de Siqueira'
const nomesC = nomeCompleto.split(' ')
console.log(nomesC)

// juntar um array com join
const meuNome = nomesC.join(' ')
console.log(meuNome)
