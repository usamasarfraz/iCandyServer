const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iCandy');
module.exports = mongoose;