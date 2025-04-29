const express = require('express')
const route = express.Router()

const controlerHome = require('./src/controllers/home')
const controlerContato = require('./src/controllers/contato')
const controlerLogin = require('./src/controllers/login')

// importando middlewares
const { loginRequired } = require('./src/middlewares/middleware')

// rotas da home
route.get('/', controlerHome.index)

// rota do login
route.get('/login', controlerLogin.index)
route.post('/login/register', controlerLogin.register)
route.post('/login/login', controlerLogin.login)
route.get('/login/logout', controlerLogin.logout)

// rotas do contato
route.get('/contato/index', loginRequired, controlerContato.index)
route.post('/contato/register', loginRequired, controlerContato.register)
route.get('/contato/index/:id', loginRequired, controlerContato.editIndex)
route.post('/contato/edit/:id', loginRequired, controlerContato.edit)
route.get('/contato/delete/:id', loginRequired, controlerContato.delete)

module.exports = route
