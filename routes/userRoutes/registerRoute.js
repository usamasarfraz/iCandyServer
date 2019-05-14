const express = require('express');
const user = express.Router();
const accountSid = 'ACae047f7a8f4ef67347c1cea00435fe57';
const authToken = 'fee176588ceccf1614ed0726fd5127be';
const client = require('twilio')(accountSid, authToken);
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
    User.findOne({email:req.body.email},function(err,data){
      if(data){
        res.json({dataFound:true});
      }
      else{
        registerController.register(req.body,transporter,function(err,data){
          res.json(data);
        });
      }
    });
});
user.post('/verified_user',(req,res)=>{
  client.messages.create({
    body: `Welcome to Let's Locate.`,
    from: '+12132143870',
    to: '+92'+req.body.contact.slice(1)
  }).then((message)=>{
      console.log(message.sid);
      let userModel = new User(req.body);
      userModel.save((err,data)=>{
        data?res.json({saved: true}):res.json({saved: false,message: `user can't register now. please try again later.`});
      });
  }).catch((err)=>{
      console.log(err);
      res.json({saved: false,message: 'Invalid Phone Number.'});
  });
});
module.exports = user;