const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const authenControl = require('../controllers/userAuthen')

// Router Authentication
router.post('/register', authenControl.register);
router.post('/login', passport.authenticate('local'),authenControl.login);
router.post('/logout', authenControl.logout);



module.exports = router;