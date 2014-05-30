'use strict';

angular.module('mozioApp')
  .directive('height', function($window) {
    return function(scope, element) {
      var w = angular.element($window);
      scope.$watch(function() {
        return {
          'h': w.height(),
          'w': w.width()
        };
      }, function(newValue) {
        scope.windowHeight = newValue.h;
        scope.windowWidth = newValue.w;

        scope.style = function() {
          return {
            'height': (newValue.h) + 'px'
          };
        };

      }, true);

      w.bind('resize', function() {
        scope.$apply();
      });
    };
  });
