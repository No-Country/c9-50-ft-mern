const jwt = require('jsonwebtoken')

const decode = (secret, information) => {
  const token = jwt.sign(information, secret)
  return token
}

const encode = (token, secret) => {
  const newtoken = jwt.verify(token, secret)
  return newtoken
}

module.exports = { decode, encode }
