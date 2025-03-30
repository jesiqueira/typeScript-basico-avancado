function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false)
    setTimeout(() => {
      resolve(msg + '- Passei na promise')
    }, tempo)
  })
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = ['Primeiro valor', esperaAi('Promise 1', 3000), esperaAi('Promise 2', 500), esperaAi('Promise 3', 10000), 'Outro Valor']

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro))
