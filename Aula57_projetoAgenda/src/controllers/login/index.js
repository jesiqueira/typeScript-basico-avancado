const Login = require('../../models/LoginModel')
exports.index = (req, res) => {
  res.render('login')
}

exports.register = async (req, res) => {
  const login = new Login(req.body)
  await login.register()
  res.send(login.errors)
}
