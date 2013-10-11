var express = require('express')
    , http = require('http')
    , app = express()
    , server = http.createServer(app)
    , io = require('socket.io').listen(server);

var port = 80;
if (process.env.NODE_LOCAL_ENV) port = 8080;
server.listen(port);

app.get('/', function (req, res) {
   res.sendfile(__dirname + "/index.html");
});

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});