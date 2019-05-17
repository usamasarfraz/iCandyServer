const accountSid = 'ACae047f7a8f4ef67347c1cea00435fe57';
const authToken = 'fee176588ceccf1614ed0726fd5127be';
const client = require('twilio')(accountSid, authToken);
const User = require('../../models/userModel/userModel');
module.exports = {
    register: function(data,transporter,callBack){
        mailOptions = {
          from: 'letslocate42@gmail.com',
          to: data.email,
          subject: `Let's Locate Verification`,
          text: `${data.username} your account verification code is ${data.token}. Don't share your code to anyone.`
        };
        if(!data.check || !data.emailVerified){
          transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  callBack(null,{type: 'emailNotSended',data: 'Invalid Email Address.'});
                } else {
                  console.log('Email sent: ' + info.response);
                  callBack(null,{type: 'emailSended',data: 'Email sended successfully.'});
                }
          });
        }
        else{
          client.messages.create({
            body: `Welcome to Let's Locate.`,
            from: '+12132143870',
            to: '+92'+data.contact.slice(1)
          }).then((message)=>{
              console.log(message.sid);
              let userModel = new User(data);
              userModel.save((err,data)=>{
                data?callBack(null,{type: 'dataSaved',data: 'Phone Registered Successfully.'}):callBack(null,{type: 'dataNotSaved',data:  `user can't register now. please try again later.`});
              });
          }).catch((err)=>{
              console.log(err);
              callBack(null,{type: 'invalidPhone',data: 'Invalid Phone Number.'})
          });
        }
        
    }
}