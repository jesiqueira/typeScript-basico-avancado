const data = new Date('1987-04-21 00:00:00')

const diaSemana = data.getDay()
let diaSemaTexto

switch (diaSemana) {
  case 0:
    diaSemaTexto = 'Domingo'
    break
  case 1:
    diaSemaTexto = 'Segunda'
    break
  case 2:
    diaSemaTexto = 'Terça'
    break
  case 3:
    diaSemaTexto = 'Quarta'
    break
  case 4:
    diaSemaTexto = 'Quinta'
    break
  case 5:
    diaSemaTexto = 'Sexta'
    break
  case 6:
    diaSemaTexto = 'Sabado'
    break
  default:
    diaSemaTexto = ''
}
console.log(diaSemaTexto)
