function checkjwt(req,res,next){
    const data = req.headers
    next()
}

module.exports = { checkjwt }