const { Schema, model } = require('mongoose')

const calendarSchema = new Schema(
  {
    date: { type: Date, required: true },
    activity: { type: String },
    // Similar a mensajes dejo tipe String, modificalo para la relacion
    colaboratorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    pacientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    endHour: { type: Date, unique: true, required: true },
    // habria que definir si lo vamos a usar numerico o tipo string
    startHour: { type: Date, unique: true, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Calendar', calendarSchema)
