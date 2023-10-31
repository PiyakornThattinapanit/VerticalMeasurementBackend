const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy

module.exports = {
    getUser : async (req,res,next) => {
        return res.json(req.user)
    }
}