const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db = require('./db/db');
const loginRoute = require('./routes/userRoutes/loginRoute');
const registerRoute = require('./routes/userRoutes/registerRoute');
let port = process.env.PORT || 6249;

const http = require('http').Server(server);
server.use(bodyParser.json());

server.use('/user/login',loginRoute);
server.use('/user/register',registerRoute);
http.listen(port,()=>{
  console.log('Server is up on '+port+'.');
});