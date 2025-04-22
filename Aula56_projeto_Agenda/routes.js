const express = require('express')
const route = express.Router()

const controlerHome = require('./src/controllers/home')
const controlerContato = require('./src/controllers/contato')

// rotas da home
route.get('/', controlerHome.home)
route.post('/contato', controlerContato.contato)

module.exports = route
