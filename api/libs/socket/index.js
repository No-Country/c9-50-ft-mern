class Socket {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', async (socket) => {
      console.log(socket.handshake.query.token)
    })
  }
}

module.exports = Socket
