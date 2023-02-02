const db = require('mongoose')

db.Promise = global.Promise

async function connect(url) {
  try {
    await db.set('strictQuery', false)
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('connect database')
  } catch (err) {
    console.log(err)
  }
}

module.exports = connect
