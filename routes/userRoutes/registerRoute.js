const express = require('express');
const user = express.Router();
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