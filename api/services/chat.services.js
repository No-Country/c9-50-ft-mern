const Message = require('../db/models/messages.model')
const ChatModel = require('../db/models/chat.model')

const addMessage = async (senderId, message, chatId) => {
  try {
    await new Message({ sender: senderId, Content: message, chat: chatId }).save()
    return { message: 'Adding message succefully' }
  } catch (error) {
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
    const messageInChat = await Message.find({ chat: chatId }).populate('sender', 'name').populate('chat', 'users')
    return {
      data: messageInChat,
      message: 'Room chat found'
    }
  } catch (error) {
    return { message: 'Error finding chat' }
  }
}

module.exports = { addMessage, addChat, findChatsByUserId, findChatByChatId }
