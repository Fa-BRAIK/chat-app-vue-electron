const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

exports.server = {
    run(port) {
        server.listen(port, () => {
            console.log('Server listening at port %d', port);
        });
    },
};

const users = new Set();

io.on('connection', socket => {
    let username; 

    socket.on('login', data => {
        username = data.username;
        if (users.has(username)) {
            console.log('Username already exits, try another one')
            io.sockets.emit('UserAlreadyExists', { message: 'Username already exits, try another one' } );
        } else {
            users.add(username);
    
            console.log('A user has logged in, users are ', users);
    
            io.sockets.emit('login', { username, users: Array.from(users) });
        }
    });
});