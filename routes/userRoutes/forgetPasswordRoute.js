const express = require('express');
const user = express.Router();
const accountSid = 'ACae047f7a8f4ef67347c1cea00435fe57';
const authToken = 'fee176588ceccf1614ed0726fd5127be';
const client = require('twilio')(accountSid, authToken);
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usamasarfraz722@gmail.com',
      pass: 'objab@97'
    }
});

mailOptions = {
    from: 'usamasarfraz722@gmail.com',
    to: 'usamasarfraz822@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

user.get('/sendSms',(req,res)=>{
    client.messages.create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+12055489497',
        to: '+923217850909'
    }).then(message => console.log(message.sid));
});

user.get('/sendMail',(req,res)=>{
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
});

module.exports = user;