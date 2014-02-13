'use strict';

angular.module('happyorsadApp')
  .controller('MessageCtrl', function ($scope, $http, $location) {
    $http.get('/api/messages').success(function(data) {
      $scope.messages = data.messages;
    });

    $scope.userMessage = {text: 'Your input here..'};
    $scope.submitPost = function () {
	    $http.post('/api/messages', $scope.userMessage).
	      success(function(data) {
	        window.location.reload(false);
	      });
	  };
  });
