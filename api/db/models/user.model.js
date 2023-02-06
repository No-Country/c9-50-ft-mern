const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    // TODO: agregar el modelo de rol
    ocupation: { type: String, required: true },
    bornDate: { type: Date, requred: true },
    role: {
      tipo: { type: String, enum: ['COLABORATOR', 'PATIENT', 'ADMIN'], required: true },
      refered: { type: String },
      mettUrl: { type: String }
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', userSchema)
