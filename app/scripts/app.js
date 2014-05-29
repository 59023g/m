'use strict';

angular.module('mozioApp', [
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ajoslin.promise-tracker'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      });

    $locationProvider.html5Mode(true);

  });
