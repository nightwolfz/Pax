'use strict';

angular.module('pax.factories').
  factory('HttpInterceptor', function ($q, $location) {
    return {
      request: function (config) {
        // do something on success
        return config;
      },
      requestError: function (rejection) {
        // do something on error
        return $q.reject(rejection);
      },
      response: function (response) {
        // do something on success
        return response;
      },
      responseError: function (rejection) {
        if (rejection.status === 404) {
          $location.path('/404');
        }
        else if (rejection.status === 500) {
          $location.path('/500');
        }
        return $q.reject(rejection);
      }
    };
  });
