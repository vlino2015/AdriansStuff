var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', function (req, res) {
    res.send('hello world')
  });

function onNewplayer (data) {
	console.log(data);
	
};
// listen for new player

 
io.on('connection', function (socket) {

    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
        });

    socket.on("players", onNewplayer);

});
server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});