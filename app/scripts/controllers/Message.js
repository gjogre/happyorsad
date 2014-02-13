'use strict';

angular.module('happyorsadApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $http.get('/api/messages').success(function(messages) {
      $scope.messages = messages;
    });

    $scope.userMessage = {text: 'Your input here..'};

    $scope.submit = function() {
	    $http.post('/api/messages', $scope.userMessage.text).success(function(messages) {

	    });
	}
  });
