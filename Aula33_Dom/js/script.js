const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
]

const container = document.querySelector('.container')

const div = document.createElement('div')

elementos.forEach((element) => {
  let { tag, texto } = element
  let tagCriada = document.createElement(tag)
  tagCriada.innerText = texto
  div.appendChild(tagCriada)
  // console.log(tagCriada)
})

container.appendChild(div)
