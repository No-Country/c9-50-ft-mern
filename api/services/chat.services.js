const Message = require('../db/models/messages.model')
const ChatModel = require('../db/models/chat.model')

const addMessage = async ({ sender, content, chat }) => {
  try {
    return await new Message({ sender, content, chat }).save()
  } catch (error) {
    return {
      message: 'Error adding message'
    }
  }
}

const addChat = async (colaboratorId, userId) => {
  try {
    const allUserId = [colaboratorId, userId]
    const availableRoom = await ChatModel.findOne({
      users: {
        $size: allUserId.length,
        $all: [...allUserId]
      }
    })
    if (availableRoom) {
      return {
        chatId: availableRoom.id,
        message: 'Retrieving an old chat room'
      }
    }
    const newChat = await new ChatModel({ users: [colaboratorId, userId] }).save()
    return {
      chatId: newChat.id,
      message: 'Chat Created'
    }
  } catch (error) {
    return {
      message: 'Error adding chat'
    }
  }
}

const findChatsByUserId = async (userId) => {
  try {
    const allChatsForUserId = await ChatModel.find({
      users: {
        $all: [userId]
      }
    })
    return {
      allChatsForUserId,
      message: 'Chats found'
    }
  } catch (error) {
    return {
      message: 'Error finding chat'
    }
  }
}

const findChatByChatId = async (chatId) => {
  try {
    const messageInChat = await Message.find({ chat: chatId })
      .populate('sender', 'name')
      .populate('chat', 'users')
    return {
      data: messageInChat,
      message: 'Room chat found'
    }
  } catch (error) {
    return {
      message: 'Error finding chat'
    }
  }
}

module.exports = { addMessage, addChat, findChatsByUserId, findChatByChatId }
