module.exports = function(socket){

    var db = require('../models'),
        _  = require('lodash'),
        co = require('co');


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

            yield addPlanet(user, 1);
            yield addPlanet(user, 2);
            yield addPlanet(user, 3);

        } catch(e){console.log(e);}

    });

    return this;
};