const express = require('express');
const user = express.Router();
const User = require('../../models/userModel/userModel');

user.post('/login_user',(req,res)=>{
    User.findOne({$and: [{email: req.body.email}, {password: req.body.password}]},function(err,data){
        if(data){
            res.json({dataFound:true,data: data});
        }
        else{
            res.json({dataFound:false});
        }
    });
});
module.exports = user;