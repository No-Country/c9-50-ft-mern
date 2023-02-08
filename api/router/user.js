const { Router } = require('express')
const validatorHandle = require('../middlewares/validatorHandler')
const { loginUserSchema, registerUserSchema } = require('../libs/zod/user.schema.js')
const { loginUser, registerUser } = require('../controller/auth.controller')
const router = Router()

router.post('/register', validatorHandle(registerUserSchema, 'body'), registerUser)
router.post('/login', validatorHandle(loginUserSchema, 'body'), loginUser)

module.exports = router
