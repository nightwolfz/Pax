'use strict';

// Demonstrate how to register services
angular.module('pax.services').service('planetService', planetService);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Contains all the information about the user
function planetService(socket){

    var planetService = {};

    planetService.planets = {
        "Terran": {metal:30, energy: 0, food:30, type:1},
        "Ice": {metal:30, energy: -30, food:-60, type:2},
        "Desert": {metal:0, energy: 30, food:-60, type:2},
    };

    planetService.SEED = function(){
        socket.emit('seed:everything');
    };

    planetService.getPlanets = function(){
        console.debug("planetService.getPlanets");
        socket.emit('planets:get', {});
    };

    return planetService;

};


