const mongoose = require('mongoose');
const { default: User } = require('./User');
const Schema = mongoose.Schema;

const HotelsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type:String,
         required: true
    },
    city:{
        type:String,
         required: true
    },
    address:{
        type:String,
         required: true
    },
    title:{
        type:String,
         required: true
    },
    photos: {
        type: String,
    },
    desription:{
        type:String,
         required: true
    },
    rating:{
        type: Number,
       min: 0,
       max:5
    },
    rooms:{
        type: [String]
    },
    cheapestPrice: {
        type:Number,
        required: true
    },

    featured: {
        type: Boolean,
        default: false,
    }
})
const Hotel = mongoose.model('Hotel', HotelsSchema)

module.exports = Hotel