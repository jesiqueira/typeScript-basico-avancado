require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('pronto')
    console.log('MongoDB conectado com sucesso')
  })
  .catch((e) => {
    console.log('Erro ao conectar no MongoDB', e)
  })

const path = require('path')
const routes = require('./routes')
const { middleGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true })) //para formulário
app.use(express.static(path.join(__dirname, 'public'))) //para arquivos estáticos
app.use(express.json())
app.use(middleGlobal) //middleware será disponível para todas as rotas, para uma rota especifica deve se adicionar o middleware na rota desejada

app.use(routes)

app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
    console.log('Server is running on port 3000')
  })
})
