const nomeCompleto = {
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  },
}

const falar = {
  fala(assunto) {
    return `${this.nome} está falando sobre ${assunto}`
  },
}

const beber = {
  beber() {
    return `${this.nome} está bebendo`
  },
}

const pessoaPrototype = Object.assign({}, nomeCompleto, falar, beber)
function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    altura: 1.8,
    peso: 80,
  }
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  })
}
