'use strict';

angular.module('mozioApp')
  .directive('map', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      link: function(scope, element, attrs) {
        console.log(element);

        var myOptions = {
          zoom: 10,
          center: new google.maps.LatLng(37.5555196,-122.1695529),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false,
          scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

        google.maps.event.addListener(map, 'click', function(e) {
          scope.$apply(function() {
            addMarker({
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            });

            console.log(e);
          });

        }); // end click listener

        addMarker = function(pos) {
          var myLatlng = new google.maps.LatLng(pos.lat, pos.lng);
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: "Hello World!"
          });
        } //end addMarker

      }
    };
  });
