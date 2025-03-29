class Pessoa {
  constructor(nome, idade, sobrenome) {
    this.nome = nome
    this.idade = idade
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
  }
}

const pessoa1 = new Pessoa('Lucas', 22, 'Silva')
const pessoa2 = new Pessoa('Maria', 25, 'Oliveira')
const pessoa3 = new Pessoa('João', 30, 'Souza')
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
pessoa1.falar()
pessoa2.falar()
pessoa3.falar()
