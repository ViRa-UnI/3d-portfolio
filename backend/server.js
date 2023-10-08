```javascript
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const { db } = require('./database.js');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('chat_message', (msg) => {
        io.emit('chat_message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```