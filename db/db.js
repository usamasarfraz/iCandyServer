const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lets_locate');
module.exports = mongoose;