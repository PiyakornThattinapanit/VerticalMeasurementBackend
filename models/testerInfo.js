const ObjectId = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const testerInfoSchema = new Schema({
    vertical_height: String,
    float_time: String,
    testerId: {type: Schema.Types.ObjectId, ref: 'Users.usertesters'}
});

testerInfoSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("testerInfo",testerInfoSchema);