const bcrypt = require('bcrypt')
const User = require('../db/models/user.model')
const { decode } = require('../utils/jwtAuth')
const { randomPassword } = require('../utils/randomPassword')
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

  const user = await User.findOne({ email })

  const validated = bcrypt.compare(password, user.password)

  if (validated) {
    const token = decode(secret, { userId: user.id, userRole: user.role.id })
    return { token, message: 'Login Succes' }
  }
  return { message: 'Email or Password Incorrect' }
}

const passwordReset = async (data) => {
  const { email } = data.body
  const newPassword = randomPassword()
  await User.findOne({ email })
  await User.updateOne({ email }, { password: newPassword })
  console.log(newPassword)
  return { message: 'Password Reset. Check your email' }
}

module.exports = { saveUser, findUser, passwordReset }