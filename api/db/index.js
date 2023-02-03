const db = require('mongoose')

db.Promise = global.Promise

async function databaseConnect(url) {
  try {
    db.set('strictQuery', false)
    db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('connected database')
  } catch (err) {
    console.log(err)
  }
}

module.exports = databaseConnect
