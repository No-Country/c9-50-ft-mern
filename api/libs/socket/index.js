class Socket {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', async (socket) => {
      socket.on('message', (msg) => console.log(msg))
    })
  }
}

module.exports = Socket
