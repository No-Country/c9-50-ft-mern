const jwt = require('jsonwebtoken')

const decode = (secret, information) => {
  const token = jwt.sign(information, secret)
  return token
}

const encode = (token, secret) => {
  const newtoken = jwt.verify(token, secret)
  return newtoken
}

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).send('missing token in header')
  } else {
    const bearer = req.headers.authorization
    const token = bearer.replace('Bearer ', '')
    req.token = token
    next()
  }
}
module.exports = { decode, encode, checkToken }
