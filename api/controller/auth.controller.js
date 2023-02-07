
const registerUser = async (req, res, next) => {
  // Registro
  console.log('registro')
}

const loginUser = async (req, res, next) => {
  // Logeo
  console.log('logeado')
}

const registerRole = async (req, res, next) => {
  // Asignación de Rol
  console.log('Rol Asignado')
}

module.exports = { registerUser, loginUser, registerRole }
