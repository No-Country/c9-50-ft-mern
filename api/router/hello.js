const { Router } = require('express')
const { checkjwt } = require('./../middlewares/authHandler')
const router = Router()

router.get('/', checkjwt, (_req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

module.exports = router
