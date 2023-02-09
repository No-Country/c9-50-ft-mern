const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const {
  loginUserSchema,
  registerUserSchema,
  recoverPasswordSchema,
  changePasswordSchema
} = require('../libs/zod/user.schema.js')
const { loginUser, registerUser, recoverPassword, changePassword } = require('../controller/auth.controller')
const { checkToken } = require('../utils/jwtAuth')

const router = Router()

router.post('/register', validatorHandle(registerUserSchema, 'body'), registerUser)
router.post('/login', validatorHandle(loginUserSchema, 'body'), loginUser)
router.post('/recover', validatorHandle(recoverPasswordSchema, 'body'), recoverPassword)
router.post('/changePassword', [validatorHandle(changePasswordSchema, 'body'), checkToken], changePassword)

module.exports = router
