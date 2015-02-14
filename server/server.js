var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/server', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.emit('news', "hello");
    socket.on('chat', function(msg){
        console.log(msg)
        io.emit('chat', "asd");
    });
});

http.listen(8080, function(){
    console.log('listening on *:8080');
});
