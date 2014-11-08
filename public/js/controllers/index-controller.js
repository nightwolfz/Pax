'use strict';

angular.module('pax.controllers').controller('IndexController', IndexController);


function IndexController ($scope, socket, userService, planetService) {

  $scope.planets = [];

  $scope.SEED = function(){
    planetService.SEED();
  };

  planetService.getPlanets();

  socket.on('planets:get', function(planets){
      console.log(planets);
      $scope.planets = planets;
  });

  setInterval(function(){
    $scope.stats = userService.stats;
  }, 1500);

}
