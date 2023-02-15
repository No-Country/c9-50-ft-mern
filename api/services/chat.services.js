const Message = require('../db/models/messages.model')
const Chat = require('../db/models/chat.model')

const addMessage = async (senderId, revieverId, message) => {
  try {
    await new Message({ senderId, revieverId, message }).save()
    return { message: 'Adding message succefully' }
  } catch (error) {
    return { message: 'Error adding message' }
  }
}

const addChat = async () => {
  try {

  } catch (error) {
    return { message: 'Error adding chat' }
  }
}

module.exports = { addMessage, addChat }
