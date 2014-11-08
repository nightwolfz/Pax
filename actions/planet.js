module.exports = function(socket){

    var db = require('../models'),
        _  = require('lodash'),
        co = require('co');


    this.getAll = co(function*()
    {
        var planets = yield db.Planet.findAll({});
        socket.emit('planets:get', _.pluck(planets));
    });


    return this;
};