const accountSid = 'ACae047f7a8f4ef67347c1cea00435fe57';
const authToken = 'fee176588ceccf1614ed0726fd5127be';
const client = require('twilio')(accountSid, authToken);
module.exports = {
    sendVerificationCode: (body,data,transporter,callBack) => {
        if(body.phoneCheck){
            client.messages.create({
                body: `Your Let's Locate verification code is: ${body.token}`,
                from: '+12132143870',
                to: '+92'+data.contact.slice(1)
            }).then((message)=>{
                console.log(message.sid);
                callBack(null,{type: 'messageSended',message: 'Verification code sended on phone.',data: data});
            }).catch((err)=>{
                console.log(err);
                callBack(null,{type: 'messageNotSended',message: 'Verification code not sended on phone try to verify with email or try again later.'});
            });
        }
        else if(body.emailCheck){
            let mailOptions = {
                from: 'letslocate42@gmail.com',
                to: body.email,
                subject: `Let's Locate Reset Password`,
                text: `${data.username} your Let's Locate verification code is ${body.token}. Don't share your code to anyone.`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  callBack(null,{type: 'mailNotSended',message: 'Verification code not sended on Email try to verify with Phone or try again later.'});
                } else {
                  console.log('Email sent: ' + info.response);
                  callBack(null,{type: 'mailSended',message: 'Verification code sended on Email.',data: data});
                }
            });
        }
    }
}