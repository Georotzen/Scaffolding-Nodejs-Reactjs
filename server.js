process.env.NODE_ENV = process.env.NODE_ENV  || 'development';

var _ = require('lodash'),
    mongoose = require('./api/config/mongoose'),
    express = require('./api/config/express'),
    passport = require('./api/config/passport');   

//init-vars
var db = mongoose();
var app = express();
var passport = passport();
var server = require('http').createServer(app);
var socketIO = require('socket.io').listen(server);
var users = {};

//sockets
socketIO.sockets.on('connection', function(socket) {

  function updateUsers(userEmail){
    if(user.email in users){
      users[user.email].emit('usernames', response);
    }
  };

  socket.on('newUser',function(data, callback){
    if(data in users){
        callback(false);
    }else{
        callback(true);
        socket.email = data.email;
        users[socket.email] = socket;
        updateUsers(socket.email);
    }
  });

  socket.on('disconnect', function(data){
    if(!socket.email) return;
    delete users[socket.email];
    updateUsers(socket.email);
  });
});

//run-server
server.listen(process.env.PORT_API);
module.exports = app;
console.log('server running on the port '+process.env.PORT_API);

