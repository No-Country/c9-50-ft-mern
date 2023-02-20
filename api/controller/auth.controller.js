const {
  saveUser,
  findUser,
  passwordReset,
  changePasswordDB,
  disconnectUser,
  updateOneUser
} = require('../services/auth.services')
const { success } = require('../Network/response')

const registerUser = async (req, res, next) => {
  try {
    const body = req.body
    const user = await saveUser(body)
    success(200, res, { payload: user, message: user.message })
  } catch (erro) {
    next(erro)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const data = await findUser(req.body)
    if (data.token) {
      success(200, res, {
        payload: data,
        message: data.message
      })
    }
  } catch (erro) {
    next(erro)
  }
}

const recoverPassword = async (req, res, next) => {
  try {
    const data = await passwordReset(req.body)
    success(200, res, { message: data.message })
  } catch (erro) {
    next(erro)
  }
}

const changePassword = async (req, res, next) => {
  const newPassword = req.body.password
  const { userId } = req.user
  const data = await changePasswordDB(userId, newPassword)
  success(200, res, { message: data.message })
}

const logout = async (req, res, next) => {
  const { userId } = req.user
  try {
    const data = await disconnectUser(userId)
    success(200, res, { message: data.message })
  } catch (err) {
    next(err)
  }
}

const updateUser = async (req, res, next) => {
  const { userId } = req.user
  try {
    const data = await updateOneUser(userId, req.body)
    success(200, res, { message: data.message })
  } catch (err) {
    next(err)
  }
}

module.exports = { registerUser, loginUser, recoverPassword, changePassword, logout, updateUser }
