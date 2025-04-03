const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

// const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [{ nome: 'João' }, { nome: 'Leandro' }, { nome: 'Pedro' }, { nome: 'Maari' }]

// const json = JSON.stringify(pessoas, '', 2)

// escrever(caminhoArquivo, json)

lerArquivo = async (caminho) => {
  const dados = await ler(caminho)
  const pessoas = JSON.parse(dados)
  // console.log(pessoas)
  pessoas.forEach((pessoa) => {
    console.log(pessoa.nome)
  })
}

lerArquivo(caminhoArquivo)
