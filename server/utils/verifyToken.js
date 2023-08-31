const jwt = require('jsonwebtoken');
const createdError = require('../utils/error')

module.exports.verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token) {
        return next(createdError(401, 'You are not authenticated'))
    }
   jwt.verify(token.process.env.JWT, (err, user) =>{
    if(err) return next(createdError(401, 'You are not authenticated'))
    req.user = user;
    next()
   })
}

module.exports.verifyUser = (req, res, next) =>{
    verifyToken(req, res,next, ()=>{
        if(req.user.id === req.params.id){
            next()
        } else {
            if (err) return next(createdError(403, 'You are not authorised'))
        }
    })
}