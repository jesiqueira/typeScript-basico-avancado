// contrutora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
  // this.nomeCompleto = function() {
}

// instância -> novo objeto
const pessoa1 = new Pessoa('Luiz', 'Otávio')
const pessoa2 = new Pessoa('Maria', 'Oliveira')

console.dir(pessoa1)
console.dir(pessoa2)
