(function() {
  'use strict';

  angular
    .module('MyApp.Home')

    .factory('addUserResource', function($resource) {
    var resourceObject = $resource('/api/addUser', null, {
        addUser: {
            method: 'PUT'
        }
    });
    return resourceObject;
    })

    .factory('getUserResource', function($resource) {
    var resourceObject = $resource('/api/getUser/:username/', {username: '@username'},  {
        getUser: {
            method: 'GET',
        }
    });
    return resourceObject;
})
})();
