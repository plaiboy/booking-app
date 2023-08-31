const User = require('../models/User')



const createUser = async (req, res, next)=>{
    const newHotel = new Hotel(req.body) 
    try {
       const savedUser = await newUser.save()
       res.status(200).json(savedUser )
    } catch (err) {
       next( err);
    }

}
const updateUser = async (req, res, next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}

        );
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

 const deleteUser = async (req, res, next)=>{
    try {
        const user = await User.findByIdAndDelete(
            req.params.id

        );
        res.status(200).json('user deleted successfully')
    } catch (err) {
        next(err)
    }

}
const getUser = async (req, res, next)=>{
    try {
        const user = await User.findById(
            req.params.id,
        );
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }

}
const getUsers = async (req, res, next)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }

}
module.exports = {createUser, deleteUser, updateUser,getUser,getUsers}