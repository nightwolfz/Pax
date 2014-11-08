module.exports = function(socket){

    // Actions
    var planet = require('./planet')(socket);
    var user = require('./user')(socket);
    var seed = require('./seed')(socket);

    // Routes
    socket.on('planets:get', planet.getAll);
    socket.on('user:create', user.create);
    socket.on('seed:everything', seed.everything);

    setInterval(function(){
        socket.emit('user:stats', {
            turns: (new Date()).getSeconds(),
            metal: 7500,
            energy: 120000,
            food: 2500
        })
    }, 2000);

};



