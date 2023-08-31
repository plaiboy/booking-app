const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res, next)=>{
 
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(200).send('User has been created')
    } catch ( err) {
        next(err)
    }
};

module.exports.login = async (req, res, next)=>{
    try {
        const user = User.findOne({username:req.body.username})
        if (!user) return next(createdError(404, 'User not found'))

        const isPasswordCorrect = await bcrypt.compare(req.body.password)
        if(!isPasswordCorrect) return next(createError(400, 'Wrong passwrd or username')) 
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

        const {password, isAdmnin, ...otherDetails } = user._doc;
        res
        .cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({...otherDetails})
    } catch (err) {
        next (err)
    }
}