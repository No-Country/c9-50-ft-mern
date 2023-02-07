function validatorHandle(schema, property) {
  return (req, res, next) => {
    const data = req[property]
    try {
      schema.parse(data)
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = validatorHandle
