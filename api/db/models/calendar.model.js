const { Schema, model } = require('mongoose')

const calendarSchema = new Schema(
  {
    date: { type: Date, required: true },
    activity: { type: String },
    // Similar a mensajes dejo tipe String, modificalo para la relacion
    colaboratorId: { type: String, required: true },
    pacientId: { type: String, required: true },
    duration: { type: String, required: true },
    // habria que definir si lo vamos a usar numerico o tipo string
    startHour: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Calendar', calendarSchema)
