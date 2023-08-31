const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
         required: true,
         unque: true
    },
    maxPeople:{
        type:Number,
         required: true
    },
    desc:{
        type: Boolean,
        default: false
    },
   roomNumbers:[{}],
  
}, { timestamps: true})

const Room = mongoose.model('Room', RoomSchema)
module.exports = Room;