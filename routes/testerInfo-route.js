const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const {isLoggedIn} = require('../config/middleware');
const { authensensor } = require('../controllers/testerInfo-controller');
const testerInfo = require('../controllers/testerInfo-controller')

router.post('/insertinfotester',isLoggedIn.isLoggedIn,testerInfo.inserttesterinfo);
router.get('/gettesterinfo',isLoggedIn.isLoggedIn,testerInfo.gettesterinfo);


router.post('/authensensor',isLoggedIn.isLoggedIn,testerInfo.authensensor);
router.get('/reqtosensor',testerInfo.reqtosensor);
router.post('/resfromsensor',testerInfo.resfromsensor);

router.get('/getdatafromsensor',isLoggedIn.isLoggedIn,testerInfo.getdatafromsensor);

module.exports = router;
