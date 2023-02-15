const { addMessage } = require('../services/chat.services')
const { success } = require('../Network/response')

const sendMessage = async (req, res, next) => {
  try {
    const { userId } = req.user
    const { revieverId, message } = req.body
    const data = await addMessage(userId, revieverId, message)
    success(200, res, { message: data.message })
  } catch (error) {
    next(error)
  }
}

module.exports = { sendMessage }
