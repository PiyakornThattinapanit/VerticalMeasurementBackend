const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    fname: String,
    lname: String,
    username: String,
    macaddress: String
});

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("user",userSchema)