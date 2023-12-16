const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const userTesterSchema = new Schema({
    fname_tester: String,
    lname_tester: String,
    userId: {type: Schema.Types.ObjectId, ref:'Users.users'}
});

userTesterSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("usertesters",userTesterSchema);
