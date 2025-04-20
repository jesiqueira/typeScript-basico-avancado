const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

// app.set('views', path.join(__dirname, 'src', 'views'))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Recebi o formulário')
})

// app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
//   console.log(req.params)
//   console.log(req.query)
//   res.send(req.params)
// })
app.get('/testes', handler)
app.get('/testes/:idUsuarios', handler)
app.get('/testes/:idUsuarios/:parametro', handler)

function handler(req, res) {
  console.log(req.params)
  console.log(req.query)
  res.send(req.params)
}

app.listen(3000, () => {
  console.log('acessar http://localhost:3000')
  console.log('Server is running on port 3000')
})
