exports.home = (req, res) => {
  res.render('index')
}

exports.homePost = (req, res) => {
  console.log(req.body)
  res.send('Recebi o formulário')
}
