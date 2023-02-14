const { Router } = require('express')
const { createChat, allChats, chatById } = require('../controller/chat.controllers')
const { checkToken } = require('../utils/jwtAuth')

const router = Router()

router.post('/', checkToken, createChat)
router.get('/', allChats)
router.get('/:chatId', chatById)

module.exports = router
