require('dotenv').config({})
const { Server } = require('socket.io')
const Socket = require('./libs/socket')
const express = require('express')
const cors = require('cors')
const router = require('./router')
const databaseConnect = require('./db')
const {
  logError,
  handlerErrorZod,
  handlerErrorGeneral,
  handlerODMError,
  handlerErrorAuth
} = require('./middlewares/errorHandler')

const PORT = process.env.PORT ?? 3001
const CLIENT_PATH = __dirname.split('api')[0] + 'app/dist'
const isProduction = process.env.NODE_ENV === 'production'
const MONGO_URL = process.env.MONGO_URL

const app = express()

const io = new Server(3002)

app.use(express.json())
app.use(cors())

databaseConnect(MONGO_URL)

if (isProduction) {
  app.use(express.static(CLIENT_PATH))
}

app.use('/api', router)

if (isProduction) {
  app.get('*', (_req, res) => {
    res.sendFile(CLIENT_PATH + '/index.html')
  })
}

new Socket(io)

app.use(logError)
app.use(handlerErrorZod)
app.use(handlerODMError)
app.use(handlerErrorAuth)
app.use(handlerErrorGeneral)

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`)
})
