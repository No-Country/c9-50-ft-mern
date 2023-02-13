const Message = require('../db/models/messages.model')

const addMessage = async (senderId, revieverId, message) => {
  try {
    await new Message({ senderId, revieverId, message }).save()
    return { message: 'Adding message succefully' }
  } catch (error) {
    return { message: 'Error adding message' }
  }
}

module.exports = { addMessage }
