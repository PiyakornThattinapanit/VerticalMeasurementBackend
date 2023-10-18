// const express = require('express');
// const router = express.Router();

// //mongoose user model
// const User = require('../models/User');
// // password handler
// const bcrypt = require('bcrypt')


// //Signup
// router.post('/signup',(req, res) => {
//     console.log(req.body)
//     let {fname,lname,username,password,cfpassword} = req.body;
//     console.log(fname)
//     fname = fname.trim();
//     lname = lname.trim();
//     username = username.trim();
//     password = password.trim();
//     cfpassword = cfpassword.trim();

//     if (fname == "" || lname == "" || username == "" ){
//         res.json({
//             status: "failed",
//             message: "No input"
//         })
//     } else if (!/^[a-zA-Z ]*$/.test(fname) && (!/^[a-zA-Z ]*$/.test(lname))){
//         res.json({
//             status: "failed",
//             message: "Invalid input"
//         })
//     } else if (password.length < 8){
//         res.json({
//             status: "failed",
//             message: "Password is too short"
//         })
//     }else if (cfpassword != password){
//         res.json({
//             status: "failed",
//             message: "Check your password again"
//         })
//     }else {
//         //Check user already?
//         User.find({username}).then(result => {
//             if (result.length) {
//                 // A user already exists
//                 res.json({
//                     status: "failed",
//                     message: "already have"
//                 })
//             } else {
//                 // try to create a new user

//                 // password handling
//                 const saltRounds = 10;
//                 bcrypt.hash(password, saltRounds).then(hashedPassword => {
//                     const newUser = new User({
//                         fname,
//                         lname,
//                         username,
//                         password: hashedPassword
//                     });

//                     newUser.save().then(result => {
//                         res.json({
//                             status: "SUCCESS",
//                             message: "Signup success",
//                             data: result
//                         })
//                     })
//                     .catch(err => {
//                         res.json({
//                             status: "failed",
//                             message: "error occured while saving user account"
//                         }) 
//                     })
//                 })
//                 .catch(err => {
//                     res.json({
//                         status: "failed",
//                         message: "error occured while hashing password"
//                     })
//                 })
//             }
//         }).catch(err=>{
//             console.log(err);
//             res.json({
//                 status: "failed",
//                 message: "error occured while checking for existing user"
//             })
//         })
//     }
// })

// // --------------------------------------------------- Login --------------------------------------------------------
// // Sign in 
// router.post('/signin',(req,res) => {
//     let {username , password} = req.body;
//     username = username.trim();
//     password = password.trim();

//     if (username == "" || password == "") {
//         res.json({
//             status: "failed",
//             message: "Empty credential supplied"
//         })
//     } 
//     else {
//         // Check if user exist
//         User.find({username}).then(data => {
//             if (data.length) {
//                 // User exists
//                 const hashedPassword = data[0].password
//                 bcrypt.compare(password, hashedPassword).then(result => {
//                     if (result) {
//                         res.json({
//                             status: "success",
//                             message: "Signin successful",
//                             data: data
//                         })  
//                     } 
//                     else {
//                         res.json({
//                             status: "failed",
//                             message: "Invalid password entered"
//                         })
//                     }
//                 })
//                 .catch(err => {
//                     res.json({
//                         status: "failed",
//                         message: "An error occured while comparing passwords"
//                     })

//                 })
//             } 
//             else {
//                 res.json({
//                     status: "failed",
//                     message: "Invalid credentials entered"
//                 })
//             }
//         })
//         .catch(err => {
//             res.json({
//                 status: "failed",
//                 message: "An error occured while checking for existing user"
//             })
//         })
//     }
// })

// // ------------------------------------------------------------- Middleware ----------------------------------------------



// router.get('/', (req, res) => {
//     res.json({ message: 'API is working!' });
//   });
// module.exports = router;
