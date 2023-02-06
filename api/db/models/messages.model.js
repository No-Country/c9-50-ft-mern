const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
  {
    message: { type: String, required: true },
    // lo dejo preparado con String para que queden completos, modificalos para hacer la relacion.
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    revieverId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Message', messageSchema)
