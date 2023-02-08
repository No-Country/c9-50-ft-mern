const { encode } = require('./../utils/jwtAuth')
const secret = process.env.SECRET

function checkjwt(req, res, next) {
  const jwtByUser = req.headers.authorization || ''
  const jwt = jwtByUser.split(' ').pop()
  if (!encode(jwt, secret)) {
    next(new Error('token no valido'))
  } else {
    req.user = jwt
    next()
  }
}

module.exports = { checkjwt }
