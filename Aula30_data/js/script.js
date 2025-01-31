// const h1 = document.querySelector('.container h1')
// const data = new Date()

// const zeroAEsqueda = (num) => (num >= 10 ? num : `0${num}`)

// const getDiaSemanaTexto = (diaSemana) => {
//   let diaSemaTexto
//   switch (diaSemana) {
//     case 0:
//       diaSemaTexto = 'Domingo'
//       return diaSemaTexto
//     case 1:
//       diaSemaTexto = 'Segunda-Feira'
//       return diaSemaTexto
//     case 2:
//       diaSemaTexto = 'Terça-Feira'
//       return diaSemaTexto
//     case 3:
//       diaSemaTexto = 'Quarta-Feira'
//       return diaSemaTexto
//     case 4:
//       diaSemaTexto = 'Quinta-Feira'
//       return diaSemaTexto
//     case 5:
//       diaSemaTexto = 'Sexta-Feira'
//       return diaSemaTexto
//     case 6:
//       diaSemaTexto = 'Sabado'
//       return diaSemaTexto
//     default:
//       return ''
//   }
// }
// const getNomeMes = (numeroMes) => {
//   let nomeMes
//   switch (numeroMes) {
//     case 0:
//       nomeMes = 'Janeiro'
//       return nomeMes
//     case 1:
//       nomeMes = 'Fevereiro'
//       return nomeMes
//     case 2:
//       nomeMes = 'Marco'
//       return nomeMes
//     case 3:
//       nomeMes = 'Abril'
//       return nomeMes
//     case 4:
//       nomeMes = 'Maio'
//       return nomeMes
//     case 5:
//       nomeMes = 'Junho'
//       return nomeMes
//     case 6:
//       nomeMes = 'Julho'
//       return nomeMes
//     case 7:
//       nomeMes = 'Agosto'
//       return nomeMes
//     case 8:
//       nomeMes = 'Setembro'
//       return nomeMes
//     case 9:
//       nomeMes = 'Autubro'
//       return nomeMes
//     case 10:
//       nomeMes = 'Novembro'
//       return nomeMes
//     case 11:
//       nomeMes = 'Dezembro'
//       return nomeMes
//   }
// }
// const h1 = document.querySelector('.container h1')
// const data = new Date()

// const criaData = (data) => {
//   // const data = new Date()
//   const diaSemana = data.getDay()
//   const numeroMes = data.getMonth()

//   const nomeDia = getDiaSemanaTexto(diaSemana)
//   const nomeMes = getNomeMes(numeroMes)

//   return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsqueda(data.getHours())}:${zeroAEsqueda(data.getMinutes())}`
// }
// // h1.innerHTML = data.toString()
// h1.innerHTML = criaData(data)

const h1 = document.querySelector('.container h1')
const data = new Date()

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })
