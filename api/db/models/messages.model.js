const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
  {
    text: { type: String, required: true },
    // lo dejo preparado con String para que queden completos, modificalos para hacer la relacion.
    senderId: { type: String, required: true },
    revieverId: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Message', messageSchema)
