const express = require('express');
const user = express.Router();
const nodemailer = require('nodemailer');
const registerController = require('../../controllers/registerController/registerController');
const User = require('../../models/userModel/userModel');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'letslocate42@gmail.com',
      pass: 'objab@97'
    }
});

user.post('/send_mail',(req,res)=>{
  User.findOne({username:req.body.username},function(err,data){
    if(data){
        res.json({dataFound:true});
    }
    else{
      registerController.register(req.body,transporter,function(err,data){
        !err?res.json({userRegistered: true,data: data}):res.json({userRegistered: false});
      });
    }
  });
});
module.exports = user;