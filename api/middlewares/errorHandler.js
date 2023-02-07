function logError(err, res, req, next) {
  console.log(err)
  next(err)
}

module.exports = { logError }
