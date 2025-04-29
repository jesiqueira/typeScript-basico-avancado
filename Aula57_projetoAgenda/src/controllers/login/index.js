const Login = require('../../models/LoginModel')
exports.index = (req, res) => {
  if (req.session.user) return res.redirect('/')
  return res.render('login')
}

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body)
    await login.register()

    if (login.errors.length > 0) {
      req.flash('errors', login.errors)
      req.session.save(() => {
        return res.redirect('/login')
      })
      return
    }
    req.flash('success', 'Seu usuário foi criado com sucesso!')
    req.session.save(() => {
      return res.redirect('/login')
    })
  } catch (error) {
    console.log(error)
    res.render('404')
  }
}
exports.login = async (req, res) => {
  try {
    const login = new Login(req.body)
    await login.login()

    if (login.errors.length > 0) {
      req.flash('errors', login.errors)
      req.session.save(() => {
        return res.redirect('/login')
      })
      return
    }
    req.flash('success', 'Login realizado com sucesso!')
    req.session.user = login.user
    req.session.save(() => {
      return res.redirect('/login')
    })
  } catch (error) {
    console.log(error)
    res.render('404')
  }
}

exports.logout = (req, res) => {
  req.session.destroy()
  res.redirect('/')
}
