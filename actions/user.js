module.exports = function(socket){

    var db = require('../models'),
        _  = require('lodash'),
        co = require('co');


    this.create = co(function*(data)
    {
        var user = yield db.Planet.findOrCreate({ username: data.username});
        console.log(_.pluck(user));
    });

    this.get = co(function*(data)
    {
        var user = yield db.Planet.find({ username: data.username});
        console.log(_.pluck(user));
    });

    return this;
};