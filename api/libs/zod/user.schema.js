const { z } = require('zod')
const { requiredRole } = require('./role.schema')
const registerUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    ocupation: z.string(),
    role: requiredRole,
    bornDate: z.coerce.date()
  })
  .required()

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const recoverPasswordSchema = z.object({
  email: z.string().email()
})

const changePasswordSchema = z.object({
  password: z.string().min(8)
})

module.exports = { registerUserSchema, loginUserSchema, recoverPasswordSchema, changePasswordSchema }
