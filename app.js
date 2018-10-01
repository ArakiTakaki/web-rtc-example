var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

function serverSetting(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
}
var server = http.createServer(serverSetting);

var io = socketio.listen(server);

io.set('heartbeat interval', 5000);
io.set('heartbeat timeout', 15000);

io.sockets.on('connection',function(socket){
  console.log('connect to socket');
});
io.sockets.on('dissconnect', function(socket){
  console.log('dissconnect to socket');
})


server.listen(3000);