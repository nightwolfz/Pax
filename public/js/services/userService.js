'use strict';

// Demonstrate how to register services
angular.module('pax.services').service('userService', userService);


// Contains all the information about the user
function userService(socket){

  var userService = {};

  userService.stats = {
      turns: 99,
      metal: 0,
      energy: 0,
      food: 0
    };

  return userService;

};


