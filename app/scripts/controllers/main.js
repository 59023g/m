'use strict';

angular.module('mozioApp')
  .controller('MainCtrl', function($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });


    $scope.isCheckedAirport = 'to_airport';
    $scope.isChecked = 'round_trip';

    $scope.airport = 'SFO';


  });
