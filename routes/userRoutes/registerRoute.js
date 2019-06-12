const express = require('express');
const user = express.Router();
const registerController = require('../../controllers/registerController/registerController');
const User = require('../../models/userModel/userModel');

user.post('/register_user',(req,res)=>{
    User.findOne({email:req.body.email},function(err,data){
      if(data){
        res.json({dataFound: true});
      }
      else{
        registerController.register(req.body,function(err,data){
          data?res.json({ dataFound: false, data }):res.json({ dataFound: false });
        });
      }
    });
});
module.exports = user;