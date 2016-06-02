(function() {
  'use strict';

    angular.module('MyApp.Common')
    .directive('commonFooter', function() {
    	return {
            templateUrl: 'app/common/partials/common-footer.html',
    	}
    })
})();
