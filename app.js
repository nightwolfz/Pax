var render = require('./lib/render');
var serve = require('koa-static');
var KeyGrip = require('keygrip');
var route = require('koa-route');
var koa = require('koa');
var websocket = require( 'koa-socket' );
var app = koa();

app.keys = new KeyGrip(['somethinodd', 'summiteven'], 'sha256');

// Database
var users = [1];

// Routing
app.use(serve(__dirname + '/public/'));
app.use(serve(__dirname + '/bower_components/'));
app.use(route.get('/', function*() {
	this.body = yield render('_layout');
}));

websocket.start(app);

// Sockets
websocket.on('join', function( data ) {
	console.log( 'USER JOINED', data );
});

websocket.on('connection', function(socket){

	socket.on('send:message', function(msg){console.log("eee");
	    socket.broadcast.emit('send:message', msg);
	});

	setInterval(function(){
		socket.broadcast.emit('user:stats', {
			turns: (new Date()).getSeconds(),
			metal: 10,
			energy: 100,
			food: 50
		})
	}, 1500);

});

app.server.listen(80);





