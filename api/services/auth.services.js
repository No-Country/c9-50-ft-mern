const bcrypt = require('bcrypt')
const User = require('../db/models/user.model')
const { encode } = require('../utils')
const secret = process.env.SECRET

const saveUser = async (data) => {
  const salt = bcrypt.genSalt(10)
  const encryptedPassaword = bcrypt.hash(data.password, salt)
  const user = {
    password: encryptedPassaword,
    ...data
  }
  await User.insertOne(user)
  return {
    data: { name: user.name, email: user.email },
    message: 'User created succefully'
  }
}

const findUser = async (data) => {
  const { email, password } = data
  const user = User.findOne({ email: email })
  const validated = bcrypt.compare(password, user.password)
  if (validated) {
    const token = encode(secret, { userId: user.id, userRole: user.role.id })
    return { token: token, message: 'Login Succes' }
  }
  return { message: 'Email or Password Incorrect' }
}

module.exports = { saveUser, findUser }
