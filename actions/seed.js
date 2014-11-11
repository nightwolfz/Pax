module.exports = function(socket){

    var db = require('../models'),
        _  = require('lodash'),
        co = require('co');


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.everything = co(function*()
    {
        console.log('-------------- SEED --------------');

        // Drop and re-create tables
        yield db.sequelize.sync({force: true});

        try {

            var user = yield db.User.create({
                username: "nightwolfz",
                password: "aaaaaa",
                email:"test@test.com"
            });

            var addPlanet = function*(parent, orbit){
                parent.addPlanet(yield db.Planet.create({
                    orbit:  orbit,
                    system: 1,
                    planet: "Terran"
                }));
            };

            yield addPlanet(user, getRandomInt(1,9));
            yield addPlanet(user, getRandomInt(1,9));
            yield addPlanet(user, getRandomInt(1,9));

            // Return new planets
            socket.emit('planets:get', _.pluck(yield db.Planet.findAll({})));

        } catch(e){console.log(e);}

    });

    return this;
};