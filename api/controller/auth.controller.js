const registerUser = async (req, res, next) => {
  // Registro
  try {
    console.log('Rol Asignado')
    throw new Error('dddddd')
  } catch (er) {
    next(er)
  }
}

const loginUser = async (req, res, next) => {
  // Logeo
  console.log('logeado')
}

const registerRole = async (req, res, next) => {
  // Asignación de Rol
}

module.exports = { registerUser, loginUser, registerRole }
