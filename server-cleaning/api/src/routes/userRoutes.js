const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
//router.get('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/register', userController.getusers); // New endpoint to fetch cleaners

module.exports = router;