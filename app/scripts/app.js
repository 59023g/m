'use strict';

angular.module('mozioApp', [
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngSanitize',
  'ajoslin.promise-tracker'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/cities/sfo/fremont-shuttles-limos/');

    $stateProvider
      .state('/', {
        url: '/cities/sfo/fremont-shuttles-limos/',
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      });

    $locationProvider.html5Mode(true);

  });
