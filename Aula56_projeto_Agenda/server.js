const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes')

app.use(express.urlencoded({ extended: true })) //para formulário
app.use(express.static(path.join(__dirname, 'public'))) //para arquivos estáticos
app.use(express.json()) //para json


app.use(routes)
app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('acessar: http://localhost:3000')
  console.log('Server is running on port 3000')
})
