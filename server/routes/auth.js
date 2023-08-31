const express = require('express');
const router = express.Router();
const register = require('../controllers/authController');
const login = require('../controllers/authController')

router.post('/register', function(req, res){register})
router.post('/login', function(req, res){login})

module.exports = router;