(function() {
  'use strict';

  angular
    .module('MyApp.Likes')

    .factory('getRestsResource', function($resource) {
    var resourceObject = $resource('/api/getRests', null, {
        getRests: {
            method: 'GET',
            isArray: true
        }
    });
    return resourceObject;
    })

    .factory('getRestDetailResource', function($resource) {
    var resourceObject = $resource('/api/getRestDetails/:id/', {id: '@id'},  {
        getRestDetails: {
            method: 'GET',
        }
    });
    return resourceObject;
})

})();
