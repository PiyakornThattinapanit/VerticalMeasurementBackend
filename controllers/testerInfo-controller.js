const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const testerInfoModel = require('../models/testerInfo');
const { json } = require('body-parser');
const { findOne } = require('../models/testerInfo');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/User');


module.exports = {
    inserttesterinfo : async(req, res, next) => {
        console.log('/path insert info...')
        const {vertical_height,float_time, testerId} = req.body;
        console.log(req.body);
        console.log("vertical:",vertical_height);
        console.log("float time:",float_time);
        console.log("testerId:",testerId);
        const testerInfo = new testerInfoModel({
            vertical_height: vertical_height,
            float_time: float_time,
            testerId: req.user.userId
        });
        let resultInfoTester = await testerInfoModel.findOne({'vertical_height':vertical_height,'float_time':float_time});
        if (!resultInfoTester) {
            await testerInfo.save();
            console.log(resultInfoTester);
            return res.status(200).json({"message":'exist Info Tester already'})
        } else {
            return res.status(400).json({"message":'Error Insert info'})
        }
    },
    gettesterinfo : async(req,res,next) => {
        console.log('/path get tester info...');
        console.log(req.body);
        const showResultInfo = await testerInfoModel.find({'vertical_height':vertical_height,'float_time':float_time,'testerId': req.user.testerId})
        if (!showResultInfo) {
            return res.status(401).json({message:'No Result Info Tester'});
        }
        return res.json(showResultInfo);
    },
    authensensor : async(req,res,next) => {
        console.log('/authentication sensor...');
        const {macaddress,tester_id} = req.body;
        const dataAuthorize = ({
            macaddress : macaddress,
            tester_id : tester_id
        })// save to DB
        console.log(dataAuthorize);
        return res.status(200).json({message:'success'});
    },
    reqtosensor : async(req,res,next) => {
        console.log('/sent request to sensor...');
        const showResultUser = await user.find({'macaddress':'84:F3:EB:48:F7:5D'});
        console.log(showResultUser);
        console.log(showResultUser[0].macaddress);
        let stateWorking = "on";
        console.log(stateWorking);
        res.set('Content-Type','text/plain');
        res.send(stateWorking);
    },
    resfromsensor : async(req,res,next) => {
        console.log('/recieve result from sensor...');
        const postResult = req.body;
        console.log("Response From Sensor:",postResult);
        return res.status(200).json({message:"dfdfd"});
    },
    getdatafromsensor : async(req,res,next) => {
        console.log("//Get Data Sensor Path...");
    }
}