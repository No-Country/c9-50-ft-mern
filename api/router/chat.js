const { Router } = require('express')
const { createChat, allChats, chatById } = require('../controller/chat.controller')
const { checkjwt } = require('../middlewares/authHandler')

const router = Router()

router.post('/', checkjwt, createChat)
router.get('/', checkjwt, allChats)
router.get('/:chatId', chatById)

module.exports = router
