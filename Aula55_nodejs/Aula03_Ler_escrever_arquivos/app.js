const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

import escrever from './modules/escrever'

const pessoas = [{ nome: 'João' }, { nome: 'Leandro' }, { nome: 'Pedro' }, { nome: 'Maari' }]

const json = JSON.stringify(pessoas, '', 2)

escrever(caminhoArquivo, json)
