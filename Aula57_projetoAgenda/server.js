require('dotenv').config()
const cookieParser = require('cookie-parser')

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

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const helmet = require('helmet')

const path = require('path')
const routes = require('./routes')
const csrf = require('csurf')
const { middleGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true })) //para formulário
app.use(express.static(path.join(__dirname, 'public'))) //para arquivos estáticos
app.use(express.json())
app.use(cookieParser()) //para cookies
app.use(helmet()) //para segurança

const sessionOptions = session({
  secret: 'meu segredo',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), //para armazenar a sessão no MongoDB
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, //1 dia
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production', //para produção
    //secure: true, //para produção
  },
})

app.use(sessionOptions) //para armazenar a sessão
app.use(flash()) //para mensagens de flash
app.use(csrf({ cookie: true })) //middleware para verificar csrf
app.use(middleGlobal) //middleware será disponível para todas as rotas, para uma rota especifica deve se adicionar o middleware na rota desejada
app.use(checkCsrfError) //middleware para verificar erro de csrf
app.use(csrfMiddleware) //middleware para verificar csrf

app.use(routes)

app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
    console.log('Server is running on port 3000')
  })
})
