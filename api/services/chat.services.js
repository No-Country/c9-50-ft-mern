const Message = require('../db/models/messages.model')
const ChatModel = require('../db/models/chat.model')

const addMessage = async ({ sender, content, chat }) => {
  try {
    return await new Message({ sender, content, chat }).save()
  } catch (error) {
    console.log(error)
    return { message: 'Error adding message' }
  }
}

const addChat = async (colaboratorId, userId) => {
  try {
    const newChat = await new ChatModel({ users: [colaboratorId, userId] }).save()
    return { chatId: newChat.id, message: 'Chat Created' }
  } catch (error) {
    return { message: 'Error adding chat' }
  }
}

const findChatsByUserId = async (userId) => {
  try {
    const allChatsForUserId = await ChatModel.find({ users: { $all: [userId] } })
    return {
      allChatsForUserId,
      message: 'Chats found'
    }
  } catch (error) {
    return { message: 'Error finding chat' }
  }
}

const findChatByChatId = async (chatId) => {
  try {
    const roomChatFound = await ChatModel.findOne({ _id: chatId })
    return {
      id: roomChatFound,
      message: 'Room chat found'
    }
  } catch (error) {
    return { message: 'Error finding chat' }
  }
}

module.exports = { addMessage, addChat, findChatsByUserId, findChatByChatId }
