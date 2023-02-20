const { save, deleteEvent, get, getAll, updateEvent } = require('../services/calendar.services')
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

const updateCalendar = async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const data = await updateEvent(id, body)
    success(200, res, { payload: data.data, message: data.message })
  } catch (error) {
    next(error)
  }
}

const getCalendar = async (req, res, next) => {
  try {
    const data = await get()
    success(200, res, { message: data.message })
  } catch (error) {
    next(error)
  }
}

const getAllCalendar = async (req, res, next) => {
  try {
    const { page, limit } = req.query
    const data = await getAll(page, limit)
    success(200, res, { message: data.message, payload: data.data })
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
  updateCalendar,
  getCalendar,
  getAllCalendar,
  deleteCalendar
}
