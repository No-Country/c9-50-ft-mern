const { z } = require('zod')

const registerUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(8),
  ocupation: z.string(),
  bornDate: z.coerce.date()
}).required()

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

module.exports = { registerUserSchema, loginUserSchema }
