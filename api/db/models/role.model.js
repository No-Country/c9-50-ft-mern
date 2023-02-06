const { Schema, model } = require('mongoose')

const roleSchema = new Schema(
  {
    // Discutir tema admin en la reunion de mañana
    type: { type: String, enum: ['COLABORATOR', 'PATIENT', 'ADMIN'] },
    refered: { type: String },
    meetUrl: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = model('Role', roleSchema)
