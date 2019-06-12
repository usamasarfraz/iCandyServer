const User = require('../../models/userModel/userModel');
module.exports = {
  register: function(data,callBack){
    let userModel = new User(data);
      userModel.save((err,data)=>{
        data && callBack(null,data);
      });
  }
}