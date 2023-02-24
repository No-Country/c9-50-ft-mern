const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const { CreateCalendar, UpdateCalendar, GetCalendar } = require('../libs/zod/calendar.schema.js')
const {
  createCalendar,
  updateCalendar,
  deleteEvent,
  getCalendar,
  getAllCalendar
} = require('../controller/calendar.controller')
const { checkjwt } = require('../middlewares/authHandler')

const router = Router()

router.post('/create', validatorHandle(CreateCalendar, 'body'), checkjwt, createCalendar)
router.put('/update', validatorHandle(UpdateCalendar, 'body'), checkjwt, updateCalendar)
router.get('/get', validatorHandle(GetCalendar, 'params'), checkjwt, getCalendar)
router.get('/getAll', checkjwt, getAllCalendar)
router.delete('/delete', validatorHandle(GetCalendar, 'params'), checkjwt, deleteEvent)

module.exports = router
