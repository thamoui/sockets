
var express = require('express');

var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
// server.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", server_port " + port )
// });




 var server = app.listen(server_port);

 app.use(express.static('app'));
 
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