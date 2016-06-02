(function() {
  'use strict';

    angular.module('MyApp.Home')
    .directive('homeHeader', function() {
    	return {
            templateUrl: 'app/home/partials/home-header.html',
    	}
    })
})();
