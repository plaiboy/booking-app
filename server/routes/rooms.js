const { createRoom, deleteRoom, getRoom, getRooms, updateRoom } = require('../controllers/roomcontrooler') ;

const express = require('exprress');
const router = express.Router();
const createdError = require('../utils/error');
const verifyToken = require('../utils/verifyToken');

router.post('/', function (req, res){verifyAdmin, createRoom});

// update
router.put('/:id', function (req, res) {verifyAdmin, updateRoom});
// delete
router.delete('/:id', function (req, res) {verifyAdmin, deleteRoom});

// get
router.get('/:id', function (req, res) {verifyAdmin, getRoom});
// get all
router.get('/', function (req, res) {verifyAdmin, getRooms});

module.exports = router;