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


    .factory('getRestsResource', function($resource) {
    var resourceObject = $resource('/api/getRests', null, {
        getRests: {
            method: 'GET',
            isArray: true
        }
    });
    return resourceObject;
    })

.factory('addRestResource', function($resource) {
    var resourceObject = $resource('/api/addRest', null, {
        addRest: {
            method: 'PUT'
            // isArray: true
        }
    });
    return resourceObject;
    })
//     .factory('getRestDetailResource', function($resource) {
//     var resourceObject = $resource('/api/getRestDetails/:id/', {id: '@id'},  {
//         getRestDetails: {
//             method: 'GET',
//         }
//     });
//     return resourceObject;
// })
})();
