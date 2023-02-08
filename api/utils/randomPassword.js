const { randomBytes } = require('crypto')

const randomPassword = () => {
  const code = randomBytes(4).toString('hex')
  return code
}

module.exports = { randomPassword }
