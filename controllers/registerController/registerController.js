const User = require('../../models/userModel/userModel');
module.exports = {
    register: function(data,transporter,callBack){
        let mailOptions = {
            from: 'usamasarfraz722@gmail.com',
            to: data.email,
            subject: `Let's Locate Verification`,
            text: `${data.username} your account verification code is ${data.token}. Don't share your code to anyone.`
        };
        transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
                var user = new User(data);
                user.save(callBack);
              }
        });
        
    }
}