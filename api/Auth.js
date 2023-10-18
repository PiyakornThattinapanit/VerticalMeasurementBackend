// const express = require('express')
// const passport = require('passport')
// const mongoose = require('mongoose')
// const User = require('../models/User')
// const LocalStrategy = require('passport-local').Strategy
// // const User = mongoose.model('User')

// const router = express.Router()

// //Register
// router.post('/register' ,(req,res,next) => {
//     const {fname , lname , username , password , cfpassword} = req.body;
//     const this_user = new User({
//         fname: fname,
//         lname: lname,
//         username: username
//         // password: password,
//         // cfpassword: cfpassword check password frontend
//     })
//     User.register(this_user, password, (err) => {
// 		console.log('check!')
// 		if (err) {
// 			return res.status(400).json(err)
// 		}
// 		return res.json({'message': 'successfully created account'})
		
// 	})
// })

// // ------------------------------------------- Login -------------------------------
// router.post('/login', passport.authenticate('local'),(req,res) => {
//     return res.json({'message': `successfully login as (${req.user.username})`})
// })

// router.post('/logout',(req,res) => {
//     req.logout((err) => {
//         if (err) {
//             return res.status(400).json(err)
//         }
//         return res.json({'message': 'successfully logged-out'})
//     })
// })

// // // ----------------------------------------- Middleware --------------------
// function isLoggedIn(req,res,next) {
//     if (!req.isAuthenticated()){
//         return res.status(401).json({'message': 'not logged-in'})
//     }
//     else {
//         return next()
//     }
// }

// // is logged in check
// router.get('/is_logged_in_check', isLoggedIn,(req,res,next) => {
//     return res.json({'message': `logged-in as (${req.User.username})`})
// })

// // get all user info
// router.get('/user',isLoggedIn,(req,res,next) => {
//     return res.json(req.User)
// })


// module.exports = router
// module.exports.isLoggedIn = isLoggedIn

