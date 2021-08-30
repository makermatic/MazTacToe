const express = require('express');

const app = express();

const port = 3000;

var server = app.listen(process.env.PORT || port);

app.use(require('cors')())

app.use(express.static('public'));

console.log('Server is running on port ' + port);

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