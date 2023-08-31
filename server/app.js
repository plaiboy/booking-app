const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRoute = require('./routes/auth');
const hotelsroute = require('./routes/hotels')
const usersRoute = require('./routes/users');
const roomsRoute = require('./routes/hotels')
const cookieParser = require('cookie-parser');
dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI )
        console.log('connected to mongodb')
    } catch (error) {
     throw error       
    }
}
connect();
// middleware
app.use(cookieParser());
app.use(express.json())
app.use('api/auth', authRoute)
app.use('api/hotels', hotelsroute)
app.use('api/rooms', roomsRoute)
app.use('api/users', usersRoute)

PORT = 6500;

app.listen(PORT, () =>{
    console.log(`server running at port ${PORT}`)
})