// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 100
// const data = new Date(0)
// const data1 = new Date(0 + tresHoras + umDia)

// console.log(data.toString())
// console.log(data1.toString())

// Data atual
// const data = new Date(2024, 3) // a, m, d, h, M, s, ms
// let data = new Date('2025-01-31 15:20:59')
// console.log(data.toString())
// console.log('Dia: ', data.getDate())
// console.log('Mês: ', data.getMonth() + 1) // Mês começa com zero
// console.log('Ano: ', data.getFullYear())
// console.log('Hora: ', data.getHours())
// console.log('Min: ', data.getMinutes())
// console.log('Seg: ', data.getSeconds())
// console.log('ms: ', data.getMilliseconds())
// console.log('Dia da semana: ', data.getDay()) // 0 - Domingo, 6 - Sábado

// data = new Date(Date.now())
// console.log(data.toString())

const zeroAEsqueda = (num) => (num >= 10 ? num : `0${num}`)

const formataData = (data) => {
  const dia = zeroAEsqueda(data.getDate())
  const mes = zeroAEsqueda(data.getMonth() + 1)
  const ano = zeroAEsqueda(data.getFullYear())
  const Hora = zeroAEsqueda(data.getHours())
  const Min = zeroAEsqueda(data.getMinutes())
  const Seg = zeroAEsqueda(data.getSeconds())
  const ms = zeroAEsqueda(data.getMilliseconds())

  return `${dia}/${mes}/${ano} ${Hora}:${Min}:${Seg}:${ms}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
