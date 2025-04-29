exports.middleGlobal = (req, res, next) => {
  res.locals.erros = req.flash('errors')
  res.locals.success = req.flash('success')
  res.locals.user = req.session.user
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  console.log('Erro de CSRF: ', err)
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404')
  }
  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  // console.log("CSRF Token gerado");
  next()
}

exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash('errors', 'Você precisa fazer login!')
    req.session.save(() => {
      return res.redirect('/login')
    })
    return
  }
  next()
}
