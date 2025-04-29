const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  sobrenome: { type: String, require: false, default: '' },
  email: { type: String, require: false, unique: true, default: '' },
  telefone: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

class Contato {
  constructor(body) {
    this.body = body
    this.errors = []
    this.contato = null
  }

  buscarPorId = async (id) => {
    if (typeof id !== 'string') return
    const contato = await ContatoModel.findById(id)
    return contato
  }

  register = async () => {
    this.valida()
    if (this.errors.length > 0) return

    this.contato = await ContatoModel.create(this.body)
  }

  valida() {
    this.cleanup()
    if (this.body.nome.length < 3 || this.body.nome.length > 20) {
      this.errors.push('Nome deve ter entre 3 e 50 caracteres')
    }
    if (this.body.sobrenome.length < 3 || this.body.sobrenome.length > 15) {
      this.errors.push('Sobrenome deve ter entre 3 e 50 caracteres')
    }
    if (!validator.isEmail(this.body.email)) {
      this.errors.push('E-mail inválido')
    }
    if (this.body.telefone.length < 8 || this.body.telefone.length > 11) {
      this.errors.push('Telefone deve ter entre 8 e 11 caracteres')
    }
  }

  cleanup() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = ''
      }
    }
    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
    }
  }
}

module.exports = Contato
