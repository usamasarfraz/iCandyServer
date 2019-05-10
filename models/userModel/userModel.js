let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    contact: String
});

let user =  mongoose.model('user', userSchema);

module.exports = user;