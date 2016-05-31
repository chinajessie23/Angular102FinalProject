(function() {
  'use strict';

  angular
    .module('MyApp.Store')

    .service('YelpRequestService', function(YelpResource) {
        var self = this;

        // GoogleRequestService.getNearbyAddresses('123', function(isValid, response) {})
        // onCompletion should be called when response comes in
        self.getNearbyAddresses = function(queryLocation, onCompletion) {
            YelpResource.getFoodRequest({
            location:queryLocation,
            term: 'food'
            })
            .$promise
            .then(function(response) {
                console.log(response);
                onCompletion(true, response);
            }, function onError(error) {
                onCompletion(false, error);
            });
        };
    })

.factory('YelpResource', function($resource) {
    var resourceObject = $resource('/api/yelp/search', null, {
        getFoodRequest: {
            method: 'GET'
            // isArray: true
        }
    });
    return resourceObject;
});
})();
