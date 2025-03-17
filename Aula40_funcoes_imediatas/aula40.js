// IIFE
// function qualquerCoisa() {
//   console.log('Qualquer coisa')
// }
// qualquerCoisa()

// Função imediata (IIFE)
;(function (idade, peso, altura) {
  console.log(idade, peso, altura)
  const nome = 'Luiz'
  function criaNome() {
    return nome + ' Otávio'
  }
  function falaNome() {
    console.log(criaNome())
  }
  falaNome()
  console.log('Estou sendo executado na hora que a função é declarada')
})(34, 80, 1.80)
