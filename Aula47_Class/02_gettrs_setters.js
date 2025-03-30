const _velocidade = Symbol() //identificado privado gera um id aleatório não permitindo acessar direto
class Carro {
  constructor(nome) {
    this.nome = nome
    this[_velocidade] = 0
  }

  acelerar() {
    if (this[_velocidade] >= 100) return
    this[_velocidade]++
  }

  freiar() {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--
  }

  get velocidade() {
    return this[_velocidade]
  }

  set velocidade(valor) {
    if (typeof valor != 'number') return
    if (valor >= 100 || valor <= 0) return
    this[_velocidade] = valor
  }
}

const fusca = new Carro('Fusca')

// for (let i = 0; i < 100; i++) {
//   fusca.acelerar()
// }

// console.log(fusca)

fusca.velocidade = 55
console.log(fusca.velocidade)

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor) {
    valor = valor.split('')
    this.nome = valor.shift()
    this.sobrenome = valor.join(' ')
  }
}

const p1 = new Pessoa('Luiz', 'Miranda')
console.log(p1.nomeCompleto)
