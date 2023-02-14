const mongoose = require('mongoose')
const NAMECHAT = 'Chat'
const chatModel = new mongoose.Schema(
  {
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }
  },
  {
    timestamps: true
  }
)

const ChatModel = mongoose.model(NAMECHAT, chatModel)

module.exports = ChatModel
