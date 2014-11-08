'use strict';
var Sequelize = require('sequelize');
var render = require('co-views')('./public', { map: { html: 'ejs' }});
var db = require('./models');
var serve = require('koa-static');
var KeyGrip = require('keygrip');
var route = require('koa-route');
var koa = require('koa');
var websocket = require('koa-socket');
var app = koa();


app.keys = new KeyGrip(['somethinodd', 'summiteven'], 'sha256');


// Routing
app.use(serve(__dirname + '/public/'));
app.use(serve(__dirname + '/bower_components/'));
app.use(route.get('/', function*() {
	this.body = yield render('_layout');
}));

// Sockets
websocket.start(app);

websocket.on('connection', function(socket){
	require('./actions/__router')(socket);
});

app.server.listen(80);





