
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('app'));



 console.log("test my node js server on port 3000");
 
 var socket = require('socket.io');
 
 var io = socket(server);
 io.sockets.on('connection', newConnection);
 
 function newConnection(socket){
     console.log('new connection: ' + socket.id);
     
     socket.on('mouse', mouseMsg);
     
     function mouseMsg(data) {
         socket.broadcast.emit('mouse', data);
         // io.socket.emit('mose', data);
         console.log(data);
     } 
 }