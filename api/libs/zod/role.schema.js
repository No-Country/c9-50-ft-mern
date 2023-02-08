const { z } = require('zod')

const registerRoleSchema = z
  .object({
    tipo: z.enum(['COLABORATOR', 'PATIENT', 'ADMIN']),
    refered: z.string(),
    url: z.string().url()
  }).partial()

const requiredRole = registerRoleSchema.required({ tipo: true })

module.exports = { registerRoleSchema, requiredRole }
