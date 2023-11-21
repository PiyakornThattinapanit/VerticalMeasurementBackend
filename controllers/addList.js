const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const userTester = require('../models/addListUser')
const LocalStrategy = require('passport-local').Strategy


module.exports = {
    addtester : async(req, res, next) => {
        console.log(req.body)
        const {fname_tester , lname_tester, userId} = req.body;
        const dataTester = new userTester({
            fname_tester: fname_tester,
            lname_tester: lname_tester,
            userId: req.user._id
        });
        let resultTester = await userTester.findOne({'fname': fname_tester, 'lname':lname_tester})
        if (!resultTester) {
            await dataTester.save();
            return res.status(200).json({"messge": 'exist data already'})
        } else {
            return res.status(400).json({"message": 'Error insert'})
        }
        // const val = await dataTester.save()
    },
    getalluser : async(req, res, next) => {
        // ************** fixed it here ***********
        // addlistUser.find((err, val) => {
        //     if (err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(val);
        //     }
        })
    }
}