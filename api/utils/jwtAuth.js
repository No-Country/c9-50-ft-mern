const jwt = require('jsonwebtoken')

const decode = (secret, information) => {
  const token = jwt.sign(information, secret)
  return token
}

const encode = (token, secret) => {
  const tokenData = jwt.verify(token, secret)
  return tokenData
}

module.exports = { decode, encode }
