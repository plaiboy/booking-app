const Room = require('../models/Rooms');
const { createdError } = require('../utils/error');
const Hotel = require('../models/Hotels');


export const createRoom = async   (req, res, next) =>{
    const roomId = req.params.roomid;
    const newRoom = new Room(req.body )

    try {
        const savedRoom = await newRoom.save();
        try {
            await Room.findByIdAndUpdate(roomId, {
                $push: { room: savedRoom._id },
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(err);
    }
}

export const updateRoom = async (req, res, next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}

        );
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}


const deleteRoom = async (req, res, next)=>{
    try {
        const room = await Room.findByIdAndDelete(
            req.params.id

        );
        res.status(200).json('hotel delted successfully')
    } catch (err) {
        next(err)
    }

}
const getRoom = async (req, res, next)=>{
    try {
        const room = await Room.findById(
            req.params.id,
        );
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }

}

const getRooms = async (req, res, next)=>{
    try {
        const room = await Room.find()
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }

}

module.exports = {createRoom, updateRoom, deleteRoom, getRoom, getRooms}