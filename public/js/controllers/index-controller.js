'use strict';

angular.module('pax.controllers').controller('IndexController', IndexController);


function IndexController ($scope, socket, userService, planetService) {

  $scope.planets = planetService.getPlanets();

  setInterval(function(){
    $scope.stats = userService.stats;
  }, 1500);

}
