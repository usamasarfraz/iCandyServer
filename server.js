const express = require('express');
const server = express();
const loginRoute = require('./routes/userRoutes/loginRoute');
const registerRoute = require('./routes/userRoutes/registerRoute');
const forgetPasswordRoute = require('./routes/userRoutes/forgetPasswordRoute');

server.use(express.static('./'));
server.use('/user/login',loginRoute);
server.use('/user/register',registerRoute);
server.use('/user/forgetpassword',forgetPasswordRoute);
server.listen(6249,()=>{
    console.log('Server is up on 6249.')
});