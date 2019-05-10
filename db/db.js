const mongoose = require('mongoose');
mongoose.connect('mongodb://usama:abcd1234@ds053186.mlab.com:53186/flx_db');
module.exports = mongoose;