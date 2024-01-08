const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy
const usertester = require('../models/addListUser')

module.exports = {
    getUser : async (req,res,next) => {
        return res.json(req.user)
    },
    getTester : async(req,res,next) => {
        console.log('//middleware getTester...')
        
        return next()
    },
    postforget : async(req,res,next) => {
        console.log('.....');
        // const fname

        return next()
    }
}