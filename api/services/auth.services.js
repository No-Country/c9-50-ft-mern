const bcrypt = require('bcrypt')
const User = require('../db/models/user.model')
const { decode } = require('../utils/jwtAuth')
const { randomPassword } = require('../utils/randomPassword')
const { sendNewUser, sendNewPass } = require('../middlewares/emailHandler')
const secret = process.env.SECRET

const saveUser = async (data) => {
  const encryptedPassaword = await bcrypt.hash(data.password, 10)
  const user = {
    ...data,
    password: encryptedPassaword
  }
  const newUser = await new User(user).save()
  await sendNewUser(newUser.email, newUser.name)
  return {
    data: { name: newUser.name, email: newUser.email },
    message: 'User created succefully'
  }
}

const findUser = async (data) => {
  const { email, password } = data

  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('Error not found')
  }

  const validated = await bcrypt.compare(password, user.password)
  await User.updateOne({ email }, { isOnline: true })
  if (validated) {
    const token = decode(secret, { userId: user.id, userRole: user.role.tipo })
    return { token, _id: user._id, role: user.role.tipo, name: user.name, message: 'Login Succes' }
  }

  throw new Error('Email or Password Incorrect')
}

const passwordReset = async (data) => {
  const { email } = data
  const newPassword = randomPassword()
  const user = await User.findOne({ email })
  if (user) {
    const encryptedPassaword = await bcrypt.hash(newPassword, 10)
    await User.updateOne({ email }, { password: encryptedPassaword })
    await sendNewPass(email, newPassword)
    return { message: 'A new password has been sent to your mail' }
  }
  return { message: 'We are not able to found a account with that email' }
}

const changePasswordDB = async (userId, newPassword) => {
  try {
    const user = await User.findById(userId)
    if (user) {
      const encryptedPassaword = await bcrypt.hash(newPassword, 10)
      await User.updateOne({ _id: userId }, { password: encryptedPassaword })
      return { message: 'Password changed successfully' }
    } else return { message: 'User not found' }
  } catch (error) {
    return { message: 'Error changing password' }
  }
}

const disconnectUser = async (userId) => {
  try {
    await User.updateOne({ _id: userId }, { isOnline: false })
    return { message: 'User disconnected' }
  } catch (error) {
    return { message: 'Failed to disconnect user' }
  }
}

module.exports = { saveUser, findUser, passwordReset, changePasswordDB, disconnectUser }
