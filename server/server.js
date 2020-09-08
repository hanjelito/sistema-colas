const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
//
const app = express();
let server = http.createServer(app);


//route
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
//port service socket
const port = process.env.PORT || 3000;


module.exports.io = socketIO(server);
require('./sockets/sockets')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});