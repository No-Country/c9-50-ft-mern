require('dotenv').config({})
const express = require('express')
const cors = require('cors')
const router = require('./router')
const databaseConnect = require('./db')
const { logError, handlerErrorZod, handlerErrorGeneral } = require('./middlewares/errorHandler')

const PORT = process.env.PORT ?? 3001
const CLIENT_PATH = __dirname.split('api')[0] + 'app/dist'
const isProduction = process.env.NODE_ENV === 'production'
const MONGO_URL = process.env.MONGO_URL

const app = express()

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
app.use(logError)
app.use(handlerErrorZod)
app.use(handlerErrorGeneral)
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`)
})
