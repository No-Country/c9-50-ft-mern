const { addMessage } = require('../../services/chat.services')
const { encode } = require('../../utils/jwtAuth')

const { SECRET } = process.env

class Socket {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', async (socket) => {
      const { token } = socket.handshake.query

      try {
        const { userId } = encode(token, SECRET)
        console.log(`Connected user ${userId}`)

        socket.on('join-room', (chatId) => {
          socket.join(chatId)
        })

        socket.on('leave-room', (chatId) => {
          socket.leave(chatId)
        })

        socket.on('message', async (payload) => {
          const newMessage = await addMessage(payload)
          this.io.to(payload.chat).emit('messages', JSON.parse(JSON.stringify(newMessage)))
        })
      } catch (error) {
        socket.disconnect()
      }
    })
  }
}

module.exports = Socket
