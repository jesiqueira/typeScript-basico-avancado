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
    const contato = await Contato.buscarPorId(req.params.id)
    res.render('contato', {
      contato,
    })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render('404')
    const contato = new Contato(req.body)
    await contato.edit(req.params.id)
    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors)
      req.session.save(() => {
        return res.redirect(`/contato/index/${req.params.id}`)
      })
      return
    }
    req.flash('success', 'Contato editado com sucesso!')
    req.session.save(() => {
      return res.redirect(`/contato/index/${contato.contato._id}`)
    })
    return
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}


exports.delete = async (req, res) => { 
  try {
    if (!req.params.id) return res.render('404')
    await Contato.delete(req.params.id)
    req.flash('success', 'Contato deletado com sucesso!')
    req.session.save(() => {
      return res.redirect('/')
    })
    return
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}