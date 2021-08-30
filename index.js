var express = require('express');

var app = express();
var server = app.listen('http://45.77.216.125:3000/');

app.use(express.static('public'));

console.log('Server is running');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection: ' + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        console.log('Server data: ', data);

    }
}