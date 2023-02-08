const { z } = require('zod')

const registerRoleSchema = z
  .object({
    type: z.enum(['COLABORATOR', 'PATIENT', 'ADMIN']).required(),
    refered: z.string().optional(),
    url: z.string().url().optional()
  })

module.exports = { registerRoleSchema }
