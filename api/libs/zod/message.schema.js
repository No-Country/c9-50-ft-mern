const { z } = require('zod')

const sendMessageSchema = z.object({
  revieverId: z.string(),
  message: z.string()
})

module.exports = { sendMessageSchema }
