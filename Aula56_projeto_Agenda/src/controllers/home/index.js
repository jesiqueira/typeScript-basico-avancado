exports.home = (req, res) => {
  res.render('index')
  // res.send(`
  //   <form action="/contato" method="POST">
  //     <input type="text" name="nome" placeholder="Nome">
  //     <input type="text" name="email" placeholder="E-mail">
  //     <button>Enviar</button>
  //   </form>
  //   `)
}
