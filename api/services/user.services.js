const User = require('../db/models/user.model')

const getConnectedColaborator = async () => {
  try {
    const users = await User.find({ isOnline: true })
    const collaborators = []
    users.forEach(e => { if (e.role.tipo === 'COLABORATOR') collaborators.push(e) })
    return {
      data: collaborators,
      message: 'Online collaborators successfully found'
    }
  } catch (error) {
    return { message: 'Error finding collaborators' }
  }
}

const getConnectedPatient = async () => {
  try {
    const users = await User.find({ isOnline: true })
    const collaborators = []
    users.forEach(e => { if (e.role.tipo === 'PATIENT') collaborators.push(e) })
    return {
      data: collaborators,
      message: 'Online collaborators successfully found'
    }
  } catch (error) {
    return { message: 'Error finding Patients' }
  }
}

module.exports = { getConnectedColaborator, getConnectedPatient }
