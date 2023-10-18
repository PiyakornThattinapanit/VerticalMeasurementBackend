const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const userTester = require('../models/addListUser')
const LocalStrategy = require('passport-local').Strategy


module.exports = {
    addtester : async(req, res, next) => {
        const {fname_tester , lname_tester} = req.body;
        const dataTester = new userTester({
            fname_tester,
            lname_tester
        });
        const val = await dataTester.save()
        res.status(200).json(dataTester)
    },
    getalluser : async(req, res) => {
        addlistUser.find((err, val) => {
            if (err){
                console.log(err);
            }
            else{
                console.log(val)
            }
        })
    }
}