const { z } = require('zod')

const registerRoleSchema = z
  .object({
    tipo: z.enum(['COLABORATOR', 'PATIENT', 'ADMIN']),
    refered: z.string(),
    mettUrl: z.string().url()
  })
  .partial()

const modifyUser = z.object({
  refered: z.string(),
  mettUrl: z.string()
})
const requiredRole = registerRoleSchema.required({ tipo: true })

module.exports = { registerRoleSchema, requiredRole, modifyUser }
