const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router2 = express.Router();
const {isLoggedIn} = require('../config/middleware')
const testerInfo = require('../controllers/testerInfo-controller')

router2.post('/insertinfotester',isLoggedIn.isLoggedIn,testerInfo.inserttesterinfo);
router2.get('/gettesterinfo',isLoggedIn.isLoggedIn,testerInfo.gettesterinfo);

module.exports = router2;
