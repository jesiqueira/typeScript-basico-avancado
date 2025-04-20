const express = require('express')
const route = express.Router()

const home = require('./controllers/home/')
const contato = require('./controllers/contato/')

// Rotas da home
route.get('/', home.home)
route.post('/', home.homePost)

// Rotas de contato
route.get('/contato', contato.contato)


module.exports = route