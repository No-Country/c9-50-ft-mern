const { error } = require('./../Network/response')

function logError(err, res, req, next) {
  console.log(err)
  console.log('Error de logueo')
  next(err)
}
function handlerErrorZod(err, req, res, next) {
  if (err?.name === 'ZodError') {
    error(err, 400, res, { message: 'faltan campos' })
  } else {
    next(err)
  }
}

function handlerODMError(err, req, res, next) {
  const hasKeyPattern = Object.prototype.hasOwnProperty.call(err, 'keyPattern')

  if (hasKeyPattern) {
    error(err, 400, res, { message: 'Error MongoDB' })
  } else {
    next(err)
  }
}

function handlerErrorAuth(err, req, res, next) {
  if (err?.name === 'JsonWebTokenError') {
    error(err, 400, res, { message: 'AuthToken Error' })
  } else {
    next(err)
  }
}

function handlerErrorGeneral(err, req, res, next) {
  error(err.message, 400, res, { message: err.message })
}

module.exports = {
  logError,
  handlerErrorZod,
  handlerErrorGeneral,
  handlerErrorAuth,
  handlerODMError
}
