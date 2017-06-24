//NodeJS Backend Server Code

var express = require('express');
var app = express();
var path = require('path');
var uid;
var server = app.listen(3030);

app.use(express.static('GameCanvas'));

console.log("My node server is running");

var socket = require('socket.io');
var io = socket(server);

////////////////////////////////////////////////////////////////
//This is the REST API called to start a new game.
app.get('/newgame', function(req, res) {
	res.sendFile(path.join(__dirname + '/GameCanvas/index.html'));
	uid=socket.id;
	io.on('connection', newConnection);    
});

///////////////////////////////////////////////////////////////
//This is the REST API that is called when the friend uses the
//URL provided by the session creator. 

app.get('/user', function(req, res) {
    uid = req.param('id');
	res.sendFile(path.join(__dirname + '/GameCanvas/index.html'));
	io.on('connection', newConnection);    
});

///////////////////////////////////////////////////

function newConnection(socket)
{
	console.log('new connection ' + socket.id);
	socket.on('mouse', mouseMsg);

	var data =
		{
			A: [[0, 0, 0],[0, 0, 0],[0, 0, 0]],
			X: 1,
			O: 0,
			SID: uid,
			RID: socket.id
		}
	console.log(data);
	socket.emit('mouse',data);
	
	function mouseMsg(data)
	{
		console.log(data.RID);
		console.log(data.SID);
		socket.broadcast.to(data.RID).emit('mouse',data);
		console.log(data);
	}
}