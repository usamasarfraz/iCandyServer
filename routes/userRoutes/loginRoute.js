const express = require('express');
const user = express.Router();
const User = require('../../models/userModel/userModel');

user.post('/login_user',(req,res)=>{
    User.findOne({$and: [{username: req.body.username}, {password: req.body.password}]},function(err,data){
        if(data){
            res.json({dataFound:true});
        }
        else{
            res.json({dataFound:false});
        }
    });
});
module.exports = user;