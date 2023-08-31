const { createUser, deleteUser, getUser, getUsers, updateUser } = require ('../controllers/userController.js');

const express = require('express');
const router = express.Router();


const User = require('../models/User')
// create
router.post('/', createUser);

// update
router.put('/:id', updateUser);
// delete
router.delete('/:id', deleteUser);

// get
router.get('/:id', getUser);
// get all
router.get('/', getUsers);

module.exports = router;
