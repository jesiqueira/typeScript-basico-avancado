exports.contato = (req, res) => {
  res.send(`
    <h1>Contato</h1>
    <p>Nome: ${req.body.nome}</p>
    <p>E-mail: ${req.body.email}</p>
    `)
  console.log(req.body)
}
