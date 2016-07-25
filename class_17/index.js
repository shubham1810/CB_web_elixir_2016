var express = require('express');
var app = express();

app.set('port', 8000);

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    // console.log('Some user connected');
    // console.log(socket);
    socket.on('disconnect', function (){
        // console.log("User disconnected");
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        // console.log("message: " + msg);
    });
});

http.listen(app.get('port'), '0.0.0.0', function() {
    console.log('listening on port ' + app.get('port'));
});
