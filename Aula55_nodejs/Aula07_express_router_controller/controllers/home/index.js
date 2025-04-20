exports.home = (req, res) => {
  res.send(`
    <form action="/" method='POST'>
    Nome do cliente: <input type="text" name='nome' />
    <button>Enaviar Dados </button>
    </form>
    `)
}

exports.homePost = (req, res) => {
  console.log(req.body)
  res.send('Recebi o formulário')
}
