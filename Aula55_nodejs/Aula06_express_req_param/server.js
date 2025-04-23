const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method='POST'>
    Nome do cliente: <input type="text" name='nome' />
    <button>Enaviar Dados </button>
    </form>
    `)
})

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
