const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const addlistControl = require('../controllers/addList')

router.post('/addusertester', addlistControl.addtester);
router.get('/getallusertester', addlistControl.getalluser);

module.exports = router;