'use strict';

// Demonstrate how to register services
angular.module('pax.services').service('userService', userService);


// Contains all the information about the user
function userService(socket){

  var userService = {};

  userService.stats = {
      turns: null,
      metal: null,
      energy: null,
      food: null
    };

  return userService;

};


