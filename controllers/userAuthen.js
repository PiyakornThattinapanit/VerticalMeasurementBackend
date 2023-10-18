const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy

function isLoggedIn(req,res,next) {
    if (!req.isAuthenticated()){
        return res.status(401).json({'message': 'not logged-in'})
    }
    else {
        return next()
    }
}

module.exports = {
    register : (req, res, next) => {
        const {fname , lname , username , password , cfpassword} = req.body;
        const this_user = new User({
            fname: fname,
            lname: lname,
            username: username
        })
        User.register(this_user, password, (err) => {
            console.log('check!')
            if (err) {
                return res.status(400).json(err)
            }
            return res.json({'message': 'successfully created account'})
            
        })
    },
    login : (req, res) => {
        return res.json({'message': `successfully login as (${req.user.username})`})
    },
    logout : (req, res) => {
        req.logout((err) => {
            if (err) {
                return res.status(400).json(err)
            }
            return res.json({'message': 'successfully logged-out'})
        })
    },
    loginCheck : (req, res, next) => {
        return res.json({'message': `logged-in as (${req.User.username})`})
    },
    getallUser : (req, res, next) => {
        return res.jsin(req.User)
    }
}

module.exports.isLoggedIn = isLoggedIn