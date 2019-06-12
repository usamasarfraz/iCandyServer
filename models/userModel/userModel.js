let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    phone: String,
    password: String,
});

let user =  mongoose.model('user', userSchema);

module.exports = user;