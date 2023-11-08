const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const authenControl = require('../controllers/userAuthen')
const getuser = require('../controllers/getUser')
const {isLoggedIn} = require('../config/middleware')

// Router Authentication
router.post('/register', authenControl.register);
router.post('/login', passport.authenticate('local'),authenControl.login);
router.post('/logout', authenControl.logout);
router.get('/getuser' , isLoggedIn.isLoggedIn, getuser.getUser);


module.exports = router;