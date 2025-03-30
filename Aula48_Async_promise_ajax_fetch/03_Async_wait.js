function rand(min = 0, max = 3) {
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

const executa = async () => {
  try {
    const fase1 = await esperaAi('Fase1', rand())
    console.log(fase1)
    const fase2 = await esperaAi('Fase2', rand())
    console.log(fase2)
    const fase3 = await esperaAi('Fase3', rand())
    console.log(fase3)
    const fase4 = await esperaAi('Fase4', rand())
    console.log(fase4)
  } catch (e) {
    console.log(e)
  }
}

executa()
