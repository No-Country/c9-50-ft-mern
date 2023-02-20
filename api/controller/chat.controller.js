const {
  addMessage,
  addChat,
  findChatsByUserId,
  findChatByChatId
} = require('../services/chat.services')
const { success } = require('../Network/response')

const sendMessage = async (userId, chatId, message, next) => {
  try {
    const data = await addMessage(userId, message, chatId)
    return data
  } catch (error) {
    next(error)
  }
}

const createChat = async (req, res, next) => {
  try {
    const { colaboratorId } = req.body
    const { userId } = req.user
    const newChat = await addChat(colaboratorId, userId)
    success(200, res, { message: newChat.message, payload: newChat.data })
  } catch (error) {
    next(error)
  }
}

const allChats = async (req, res, next) => {
  try {
    const { userId } = req.user
    const userChats = await findChatsByUserId(userId)
    success(200, res, { message: userChats.message, payload: userChats.allChatsForUserId })
  } catch (error) {
    next(error)
  }
}

const chatById = async (req, res, next) => {
  try {
    const { chatId } = req.params
    const roomChat = await findChatByChatId(chatId)
    success(200, res, { message: roomChat.message, payload: roomChat.data })
  } catch (error) {
    next(error)
  }
}

module.exports = { sendMessage, createChat, allChats, chatById }
