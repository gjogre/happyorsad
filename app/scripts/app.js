'use strict';

angular.module('happyorsadApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MessageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
