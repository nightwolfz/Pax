'use strict';

// Demonstrate how to register services
angular.module('pax.services').service('planetService', planetService);


// Contains all the information about the user
function planetService(socket){

    var planetService = {};

    planetService.planets = {
        "Terran": {metal:30, energy: 0, food:30, type:1},
        "Ice": {metal:30, energy: -30, food:-60, type:2},
        "Desert": {metal:0, energy: 30, food:-60, type:2},
    };

    planetService.getPlanets = function(){
        return [
            {id:1, orbit:1, system:1, planet: planetService.planets["Terran"]},
            {id:2, orbit:2, system:1, planet: planetService.planets["Desert"]}
        ];
    };

    return planetService;

};


