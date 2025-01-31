const pessoa = {
  nome: 'Edmar',
  sobrenome: 'Siqueira',
  idade: 40,
  endereco: {
    rua: 'rua 1',
    numero: 123,
  },
}

const { nome, endereco: {rua} } = pessoa
console.log(nome, rua)
