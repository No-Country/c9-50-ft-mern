const { save, deleteEvent, get } = require('../services/calendar.services')
const { success } = require('../Network/response')

const createCalendar = async (req, res, next) => {
  try {
    const body = req.body
    const calendar = await save(body)
    success(200, res, { payload: calendar.data, message: calendar.message })
  } catch (error) {
    next(error)
  }
}

const getCalendar = async (req, res, next) => {
  const user = req.user
  try {
    const data = await get(user)
    success(200, res, { message: data.message, payload: data })
  } catch (error) {
    next(error)
  }
}

const deleteCalendar = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await deleteEvent(id)
    success(200, res, { message: data.message, payload: data.data })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createCalendar,
  getCalendar,
  deleteCalendar
}
