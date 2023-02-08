const bcrypt = require('bcrypt')
const User = require('../db/models/user.model')
const { encode } = require('../utils')
const secret = process.env.SECRET

const registerUser = async (data) => {
  const salt = bcrypt.genSalt(10)
  const encryptedPassaword = bcrypt.hash(data.password, salt)
  const user = {
    password: encryptedPassaword,
    ...data
  }
  await User.insertOne(user)
  return {
    data: user,
    message: 'User created succefully'
  }
}

const loginUser = async (data) => {
  const { email, password } = data
  const user = User.findOne({ email: email })
  const validated = bcrypt.compare(password, user.password)
  if (validated) {
    const token = encode(secret, { userId: user.id, userRole: user.role.id })
    return token
  }
  return 'Mail o Contraseña Incorrecto'
}

module.exports = { registerUser, loginUser }
