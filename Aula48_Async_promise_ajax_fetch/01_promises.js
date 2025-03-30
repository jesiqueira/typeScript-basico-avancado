function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE')
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

esperaAi('conexão com BD', rand(1, 3))
  .then((resposta) => {
    console.log(resposta)
    return esperaAi('Buscando dados da Base', rand(1, 3))
  })
  .then((resposta) => {
    console.log(resposta)
    return esperaAi(11111, rand(1, 3))
  })
  .then((resposta) => console.log(resposta))
  .then(() => console.log('Exibindo dados.'))
  .catch((e) => console.log('Error: ', e))
