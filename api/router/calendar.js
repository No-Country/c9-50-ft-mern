const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const { CreateCalendar } = require('../libs/zod/calendar.schema.js')
const {
  createCalendar,
  deleteCalendar,
  getCalendar
} = require('../controller/calendar.controller')
const { checkjwt } = require('../middlewares/authHandler')

const router = Router()

router.post('/create', validatorHandle(CreateCalendar, 'body'), checkjwt, createCalendar)
router.get('/get', checkjwt, getCalendar)
router.delete('/delete/:id', checkjwt, deleteCalendar)

module.exports = router
