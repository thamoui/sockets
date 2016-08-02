
var express = require('express');

var app = express();

// var server = app.listen(3000);


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
var server = app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});

 

 app.use(express.static('public'));
 
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