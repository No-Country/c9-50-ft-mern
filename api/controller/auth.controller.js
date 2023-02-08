const registerUser = async (req, res, next) => {
  try {
    const body = req.body
    const user = await saveUser(body)
    res.status(200).send({
      error: false,
      message: 'User register',
      data: user
    })
  } catch (erro) {
    next({ erro, origin: 'odm' })
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await findUserEmail(email, password)
    const token = signToken(user)
    res.status(200).send({
      error: false,
      message: 'User found',
      data: token
    })
  } catch (erro) {
    next(erro)
  }
}

module.exports = { registerUser, loginUser }
