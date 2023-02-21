const Calendar = require('../db/models/calendar.model')

const save = async (body) => {
  const newEvent = await new Calendar(body).save()
  return {
    message: 'create new event',
    data: newEvent
  }
}

const deleteEvent = async (id) => {
  const deleteEvent = await Calendar.findByIdAndDelete(id)
  return {
    message: 'delete event',
    data: deleteEvent
  }
}

const get = async (id) => {
  const event = await Calendar.findById(id)
  if (!event) {
    throw new Error({ message: 'no found event', status: 400 })
  }
}

const getAll = async (page = 0, limit = 10) => {
  const calendar = Calendar.find()
    .sort({ _id: 1 })
    .skip(page > 0 ? (page - 1) * limit : 0)
    .limit(limit)
  return { message: 'get calendar', data: calendar }
}

const updateEvent = async (id, body) => {
  const updateEvent = await Calendar.findByIdAndUpdate(id, { $set: body })
  return { message: 'update event', data: updateEvent }
}

module.exports = { save, deleteEvent, get, getAll, updateEvent }
