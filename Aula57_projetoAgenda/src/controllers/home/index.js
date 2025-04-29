const contato = require('../../models/ContatoModel')

exports.index = async (req, res) => {
  const contatos = await contato.buscarContatos()
  res.render('index', {
    contatos,
  })
}
