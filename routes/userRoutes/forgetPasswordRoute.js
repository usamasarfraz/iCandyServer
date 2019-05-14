const express = require('express');
const user = express.Router();
const nodemailer = require('nodemailer');
const User = require('../../models/userModel/userModel');
const resetPasswordController = require('../../controllers/resetPasswordController/resetPasswordController');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'letslocate42@gmail.com',
      pass: 'objab@97'
    }
});

user.post('/reset_password',(req,res)=>{
    User.findOne({email:req.body.email},(err,data)=>{
        if(err){
            res.json({dataNotFound:true});
        }
        else{
            resetPasswordController.sendVerificationCode(req.body,data,transporter,function(err,data){
                res.json(data);
            });
        }
    });
});

user.post('/change_password',(req,res)=>{
    User.findOneAndUpdate({email: req.body.email},{password: req.body.password},(err,data)=>{
        if(data){
            res.json({passwordUpdated: true});
        }
        else{
            res.json({passwordUpdated: false});
        }
    });
});

module.exports = user;