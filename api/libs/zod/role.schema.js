const { z } = require('zod')

const registerRoleSchema = z
  .object({
    type: z.enum(['COLABORATOR', 'PATIENT', 'ADMIN']),
    refered: z.string(),
    url: z.string().url()
  })
  .required()

module.exports = { registerRoleSchema }
