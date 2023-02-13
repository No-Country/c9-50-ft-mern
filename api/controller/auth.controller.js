const { saveUser, findUser, passwordReset, changePasswordDB } = require('../services/auth.services')
const { success } = require('../Network/response')
const { encode } = require('../utils/jwtAuth')
const secret = process.env.SECRET
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
        payload: { token: data.token, role: data.role, name: data.name },
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
  const { userId } = encode(req.token, secret)
  const data = await changePasswordDB(userId, newPassword)
  success(200, res, { message: data.message })
}

module.exports = { registerUser, loginUser, recoverPassword, changePassword }
