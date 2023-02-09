const success = (status, res, data) => {
  const myStatus = status || 200
  res.status(myStatus).json({
    error: false,
    message: data.message,
    payload: data.payload
  })
}

const error = (err, status, res, data) => {
  const myStatus = status || 400
  res.status(myStatus).json({
    error: true,
    message: data.message,
    payload: err
  })
}

module.exports = { success, error }
