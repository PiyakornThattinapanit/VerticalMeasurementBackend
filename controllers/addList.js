const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const userTester = require('../models/addListUser')
const LocalStrategy = require('passport-local').Strategy


module.exports = {
    addtester : async(req, res, next) => {
        // console.log(req.body)
        const {fname_tester , lname_tester, userId} = req.body;
        const dataTester = new userTester({
            fname_tester: fname_tester,
            lname_tester: lname_tester,
            userId: req.user._id
        });
        let resultTester = await userTester.findOne({'fname': fname_tester, 'lname':lname_tester})
        if (!resultTester) {
            await dataTester.save();
            console.log(resultTester);
            return res.status(200).json({"messge": 'exist data already'})
        } else {
            return res.status(400).json({"message": 'Error insert'})
        }
        // const val = await dataTester.save()
    },
    getalltester : async(req, res, next) => {
        console.log("//path getalluser...")
        const checkExistTester = await userTester.find({userId: req.user._id});
        if (!checkExistTester) {
            return res.status(401).json({message:'Failed to find Tester'});
        }
        return res.json(checkExistTester);
        },
    deletetester : async(req, res, next) => {
        console.log('API Delete Tester')
        const tester_id = req.params.tester_id;
        console.log(tester_id);
        if (userTester.findOne({_id: tester_id})) {
            await userTester.deleteOne({_id: tester_id});
            // await userTester.deleteMany({_id: tester_id});
            res.json({'message':'Tester deleted already'})
        } else {
            res.status(404).json({ message: 'User not found' });
        }
        }
    }
