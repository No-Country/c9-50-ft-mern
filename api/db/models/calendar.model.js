const { Schema, model } = require('mongoose')

const calendarSchema = new Schema(
  {
    date: { type: String, required: true },
    activity: { type: String },
    // Similar a mensajes dejo tipe String, modificalo para la relacion
    colaboratorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    pacientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    startHour: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Calendar', calendarSchema)
