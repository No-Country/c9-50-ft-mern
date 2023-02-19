const { success, error } = require('../Network/response')
const { getConnectedColaborator, getConnectedPatient } = require('../services/user.services')

const getConnectedUsers = async (req, res, next) => {
  const { userRole } = req.user
  try {
    if (userRole === 'COLABORATOR') {
      const users = await getConnectedColaborator()
      success(200, res, { payload: users.data, message: users.message })
    } else {
      const { data, message } = await getConnectedPatient()
      success(200, res, { payload: data, message })
    }
  } catch (err) {
    error(err, 400, res, { payload: err, message: err.message })
  }
}

module.exports = { getConnectedUsers }
