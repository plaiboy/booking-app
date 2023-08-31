const { createHotel, deleteHotel, getHotel, getHotels, updateHotel } =require('../controllers/hotelcontroller');

const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotels')
const {verifyAdmin} = require('../utils/verifyToken')
// create
router.post('/', function (req,res){verifyAdmin, createHotel});

// update
router.put('/:id', function (req, res) {verifyAdmin, updateHotel});
// delete
router.delete('/:id', function (req, res) {verifyAdmin, deleteHotel});

// get
router.get('/:id', function (req,res) {verifyAdmin, getHotel});
// get all
router.get('/', function (req, res) {verifyAdmin, getHotels});

module.exports = router;