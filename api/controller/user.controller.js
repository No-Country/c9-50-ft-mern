const { success, error } = require('../Network/response')
const { getConnectedColaborator, getConnectedPatient, getUser } = require('../services/user.services')

const getConnectedUsers = async (req, res, next) => {
  const { userRole, userId } = req.user
  try {
    if (userRole === 'COLABORATOR') {
      const users = await getConnectedPatient(userId)
      success(200, res, { payload: users.data, message: users.message })
    } else {
      const { data, message } = await getConnectedColaborator(userId)
      success(200, res, { payload: data, message })
    }
  } catch (err) {
    error(err, 400, res, { payload: err, message: err.message })
  }
}

const getProfile = async (req, res, next) => {
  const { userId } = req.user
  try {
    const user = await getUser(userId)
    success(200, res, { payload: user.data, message: user.message })
  } catch (err) {
    error(err, 400, res, { payload: err, message: err.message })
  }
}

module.exports = { getConnectedUsers, getProfile }
