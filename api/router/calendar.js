const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const { CreateCalendar, UpdateCalendar, GetCalendar } = require('../libs/zod/user.schema.js')
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
router.post('/update', validatorHandle(UpdateCalendar, 'body'), checkjwt, updateCalendar)
router.post('/get', validatorHandle(GetCalendar, 'params'), checkjwt, getCalendar)
router.post('/getAll', checkjwt, getAllCalendar)
router.post('/delete', validatorHandle(GetCalendar, 'params'), checkjwt, deleteEvent)

module.exports = router
