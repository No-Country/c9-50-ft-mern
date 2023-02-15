class Socket {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', async (socket) => {
      const token = socket.handshake.query.token

      if (!token) {
        socket.disconnect()
      }
    })
  }
}

module.exports = Socket
