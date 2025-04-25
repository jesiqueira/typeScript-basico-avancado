exports.middleGlobal = (req, res, next) => {
  // console.log()
  // console.log('Passei no middleware')
  // console.log()
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  console.log("Erro de CSRF: ", err)
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
