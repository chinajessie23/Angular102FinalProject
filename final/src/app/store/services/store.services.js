(function() {
  'use strict';

  angular
    .module('MyApp.Store')


    .service('MainDataService', function(YelpRequestService) {
        var self = this;

        self.getMainCtrlRestaurants = function(address, onCompletion) {
            YelpRequestService.getNearbyAddresses(address, function (isValid, response) {
                if (isValid) {
                    var finalResult = [];
                    for (var i = 0; i < response.businesses.length; i++) {
                        finalResult.push(response.businesses[i]);
                    }
                    console.log(finalResult)
                    onCompletion(true, finalResult)
                } else {
                    // Error Handling
                }
            })
        };
    })











    // .factory('MainResource', function($resource) {

    // 	var resourceObject = $resource('/assets/json/sampleData.json', null, {
    // 		getPeople: {
    // 			method: 'GET',
    // 			isArray: true
    // 		}
    // 	});


   	// 	return resourceObject;
    // });



    // Example!!!
    // var resourceObject = $resource('/api/users/auth', {
    // 	// someID: '@someID'
    // }, {
    // 	signup: {
    // 		method: 'PUT',
    // 		headers: {
    // 			// 'Content-Type': '...'
    // 		},
    // 		isArray: true
    // 	},
    // 	login: {
    // 		method: 'POST',
    // 		headers: {

    // 		}
    // 	}
    // });

})();
