'use strict';

// Declare individual modules
angular.module('pax.controllers', []);
angular.module('pax.directives', []);
angular.module('pax.factories', []);
angular.module('pax.filters', []);
angular.module('pax.services', []);
angular.module('socket.io', []);

// Declare app level module + dependencies
angular.module('pax', [
  'ngRoute',
  'socket.io',
  'pax.controllers',
  'pax.directives',
  'pax.factories',
  'pax.filters',
  'pax.services'
]).
config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html'
    })
    .when('/home', {
      templateUrl: 'views/index.html'
      //controller: 'IndexController'
    })
    .when('/404', {
      templateUrl: 'views/404.html'
    })
    .when('/500', {
      templateUrl: 'views/500.html'
    })
    .otherwise({redirectTo: '/404'});

  $httpProvider.interceptors.push('HttpInterceptor');
});
