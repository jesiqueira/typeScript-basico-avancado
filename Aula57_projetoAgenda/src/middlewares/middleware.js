exports.middleGlobal = (req, res, next) => {
  console.log()
  console.log('Passei no middleware')
  console.log()
  next()
}
