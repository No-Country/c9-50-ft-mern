const { success } = require('../Network/response')

const createChat = async (req, res, next) => {
  // const { colaboratorId } = req.body
  // const { userId } = req.user
  try {
    const chatId = 0
    success(200, res, chatId)
  } catch (error) {
    next(error)
  }
}

const allChats = async (req, res, next) => {
  // const { userId } = req.user
  try {
    const userChats = 0
    success(200, res, userChats)
  } catch (error) {
    next(error)
  }
}

const chatById = async (req, res, next) => {
  // const { chatId } = req.params
  try {
    const chat = 0
    success(200, res, chat)
  } catch (error) {
    next(error)
  }
}

module.exports = { createChat, allChats, chatById }
