const Contato = require('../../models/ContatoModel')
exports.index = (req, res) => {
  res.render('contato', {
    contato: {},
  })
}
exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body)
    await contato.register()
    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors)
      req.session.save(() => {
        return res.redirect('contato')
      })
      return
    }
    req.flash('success', 'Contato cadastrado com sucesso!')
    req.session.save(() => {
      return res.redirect(`/contato/index/${contato.contato._id}`)
    })
    return
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}

exports.editIndex = async (req, res) => {
  if (!req.params.id) return res.render('404')
  try {
    const contato = new Contato(req.body)
    const c = await contato.buscarPorId(req.params.id)
    res.render('contato', {
      contato: c,
    })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}
