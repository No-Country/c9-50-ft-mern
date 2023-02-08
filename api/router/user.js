const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const {
  loginUserSchema,
  registerUserSchema,
  recoverPasswordSchema
} = require('../libs/zod/user.schema.js')
const { loginUser, registerUser, recoverPassword } = require('../controller/auth.controller')

const router = Router()

router.post('/register', validatorHandle(registerUserSchema, 'body'), registerUser)
router.post('/login', validatorHandle(loginUserSchema, 'body'), loginUser)
router.post('/recover', validatorHandle(recoverPasswordSchema, 'body'), recoverPassword)

module.exports = router
