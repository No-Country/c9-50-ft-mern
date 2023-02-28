const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const {
  loginUserSchema,
  registerUserSchema,
  recoverPasswordSchema,
  changePasswordSchema
} = require('../libs/zod/user.schema.js')
const {
  loginUser,
  registerUser,
  recoverPassword,
  changePassword,
  logout,
  updateUser
} = require('../controller/auth.controller')
const { sendMessage } = require('../controller/chat.controller')
const { modifyUser } = require('../libs/zod/role.schema')
const { checkjwt } = require('../middlewares/authHandler')
const { sendMessageSchema } = require('../libs/zod/message.schema')
const { getConnectedUsers } = require('../controller/user.controller')

const router = Router()

router.post('/register', validatorHandle(registerUserSchema, 'body'), registerUser)
router.post('/login', validatorHandle(loginUserSchema, 'body'), loginUser)
router.post('/recover', validatorHandle(recoverPasswordSchema, 'body'), recoverPassword)
router.post('/changePassword', [validatorHandle(changePasswordSchema, 'body'), checkjwt], changePassword)
router.post('/sendMessage', [validatorHandle(sendMessageSchema, 'body'), checkjwt], sendMessage)
router.get('/getConnectedUsers', checkjwt, getConnectedUsers)
router.get('/logout', checkjwt, logout)
router.post('/modifyUser', checkjwt, validatorHandle(modifyUser, 'body'), updateUser)
module.exports = router
