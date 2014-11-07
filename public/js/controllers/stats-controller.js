'use strict';

angular.module('pax.controllers').controller('StatsController', StatsController);


function StatsController($scope, socket, userService) {

  $scope.stats = userService.stats;

  socket.on('user:stats', function (data) {
    userService.stats = data;
    $scope.stats = data;
  });


}
