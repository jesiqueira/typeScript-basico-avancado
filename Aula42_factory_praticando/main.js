function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes()
    },

    apagarUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }
        if (el.classList.contains('btn-clear')) {
          this.display.value = ''
        }

        if (el.classList.contains('btn-del')) {
          this.apagarUm()
        }
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
