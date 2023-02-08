const { saveUser, findUser, passwordReset } = require('../services/auth.services')
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
      success(200, res, { payload: data.token, message: data.message })
    } else {
      success(200, res, { message: data.message })
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

module.exports = { registerUser, loginUser, recoverPassword }
