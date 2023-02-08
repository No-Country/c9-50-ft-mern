const bcrypt = require('bcrypt')
const User = require('../db/models/user.model')
const { encode } = require('../utils/jwtAuth')
const secret = process.env.SECRET

const saveUser = async (data) => {
  const encryptedPassaword = await bcrypt.hash(data.password, 10)
  const user = {
    password: encryptedPassaword,
    ...data
  }
  const newUser = await new User(user).save()

  return {
    data: { name: newUser.name, email: newUser.email },
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
