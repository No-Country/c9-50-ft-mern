const { z } = require('zod')

const sendMessageSchema = z.object({
  chatId: z.string(),
  message: z.string()
})

module.exports = { sendMessageSchema }
