const express = require('express')
const route = express.Router()

const controlerHome = require('./src/controllers/home')
const controlerContato = require('./src/controllers/contato')
const controlerLogin = require('./src/controllers/login')

// rotas da home
route.get('/', controlerHome.index)

// rota do login
route.get('/login', controlerLogin.index)
route.post('/login/register', controlerLogin.register)


// rotas do contato
route.post('/contato', controlerContato.contato)

module.exports = route
