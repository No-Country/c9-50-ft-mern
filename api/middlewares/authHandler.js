const { encode } = require('./../utils/jwtAuth')
const secret = process.env.SECRET

function checkjwt(req, res, next) {
  const jwtByUser = req.headers.authorization || ''
  const jwt = jwtByUser.split(' ').pop()
  const isUser = encode(jwt, secret)
  req.user = isUser
  next()
}

function roleCheck(...roles) {
  return (req, res, next) => {
    const role = req.user.userRole
    if (roles.includes(role)) {
      next()
    } else {
      next(new Error('Autorization Error'))
    }
  }
}

module.exports = { checkjwt, roleCheck }
