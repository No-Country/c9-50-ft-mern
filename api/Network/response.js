const success = (status, res, data) => {
  const myStatus = status || 200
  res.status(myStatus).json({
    error: false,
    message: data.message,
    paylod: data.payload
  })
}

const error = (err, status, res, data) => {
  const myStatus = status || 400
  res.status(myStatus).json({
    error: true,
    message: data.message,
    paylod: err
  })
}

module.exports = { success, error }
