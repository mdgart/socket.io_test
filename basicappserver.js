var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
    fs.readFile(__dirname + '/basicappclient.html',
    function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index');
        }
        res.writeHead(200);
        return res.end(data);
    });
}

io.sockets.on('connection', function(socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function(data){
        console.log(data);
    });
});