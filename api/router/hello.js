const { Router } = require('express')
const { checkjwt, roleCheck } = require('./../middlewares/authHandler')
const router = Router()

router.get('/', checkjwt, roleCheck('COLABORATOR'), (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

module.exports = router
