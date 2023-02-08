const { error } = require('./../Network/response')

function logError(err, res, req, next) {
  console.log(err)
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
  if (err.hasOwnProperty('keyPattern')) {
    error(err, 400, res, { message: 'Error MongoDB' })
  } else {
    next(err)
  }
}

function handlerErrorGeneral(err, req, res, next) {
  error(err, 400, res, { message: 'error general' })
}

module.exports = { logError, handlerErrorZod, handlerErrorGeneral, handlerODMError }
