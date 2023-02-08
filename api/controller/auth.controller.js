const { saveUser, findUser } = require('../services/auth.services')
const { success, error } = require('../Network/response')

const registerUser = async (req, res, next) => {
  try {
    const body = req.body
    const user = await saveUser(body)
    success(200, res, { payload: user, message: user.message })
  } catch (erro) {
    error(erro, 404, res, { payload: erro, message: 'Error in the request.' })
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
    error(erro, 404, res, { payload: erro, message: 'Error in the request.' })
  }
}

module.exports = { registerUser, loginUser }
