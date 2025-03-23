const nomes = ['Jose', 'Edmar', 'Siqueira', 'Lucas', 'Adeguimar']
console.log(nomes)

let indice = 0
let quanto_quero_remover = 3

// nomes.splice(indice, quanto_quero_remover)
console.log(nomes)

// simular pop

const removido = nomes.splice(-2, 2)
console.log(nomes)
console.log(removido)
