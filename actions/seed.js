module.exports = function(socket){

    var db = require('../models'),
        _  = require('lodash'),
        co = require('co');


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomPlanetType(){
        var planetTypes = db.Planet.rawAttributes.planet.values;
        return planetTypes[Math.floor(Math.random()*planetTypes.length)];
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

            console.log(getRandomPlanetType());

            var addPlanet = function*(parent, orbit, planet){
                parent.addPlanet(yield db.Planet.create({
                    orbit:  orbit,
                    system: 1,
                    planet: planet
                }));
            };

            yield addPlanet(user, getRandomInt(1,9), getRandomPlanetType());
            yield addPlanet(user, getRandomInt(1,9), getRandomPlanetType());
            yield addPlanet(user, getRandomInt(1,9), getRandomPlanetType());

            // Return new planets
            socket.emit('planets:get', _.pluck(yield db.Planet.findAll({})));

        } catch(e){console.log(e);}

    });

    return this;
};