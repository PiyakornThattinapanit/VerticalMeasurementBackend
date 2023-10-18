// const express = require('express');
// const router = express.Router();
// const {userTester} = require('../models/addListUser')


// //post add user tester
// router.post("/addusertester",async(req,res)=>{
//     try{
//         console.log(req.body)
//         const {fname_tester,lname_tester} = req.body
//         const dataTester = new userTester({
//             fname_tester,
//             lname_tester
//         });
//         const val = await dataTester.save()
//         res.status(200).json(dataTester)
//     } catch (err) {
//         console.log(err)
//         res.status(400).json(err)
//     }
// })

// // fetch all user tester 
// router.get("/getallusertester",async(req,res)=>{
//     addlistUser.find((err,val) => {
//         if (err){
//             console.log(err);
//         }
//         else{
//             console.log(val);
//         }
//     })
// })

// module.exports = router;