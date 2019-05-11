const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://letslocate:abcd123@cluster0-ron6f.mongodb.net/test?retryWrites=true');
module.exports = mongoose;