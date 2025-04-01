const nome = 'Edmar'
const sobrenome = 'Siqueira'

const falaNome = () => `${nome} ${sobrenome}`

// module.exports.nome = nome
// module.exports.sobreno = sobrenome
// module.exports.falaNome = falaNome

// console.log(module.exports)

exports.nome = nome
exports.sobreno = sobrenome
exports.falaNome = falaNome

console.log(exports)
