const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const addlistControl = require('../controllers/addList')
const {isLoggedIn} = require('../config/middleware')

router.post('/addusertester', isLoggedIn.isLoggedIn,addlistControl.addtester);
router.get('/getallusertester', isLoggedIn.getUserTester);

module.exports = router;