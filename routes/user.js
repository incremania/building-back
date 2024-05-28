const express = require('express');
const router = express.Router();
// const { register, getAllUsers } = require('../controllers/user')
const { sendEmailApt } = require('../controllers/user')


router
.post('/register', sendEmailApt)
// .get('/users', getAllUsers)

module.exports = router