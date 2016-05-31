angular.module('MyApp.Store')

.controller('StoreController', function(STATES,MainDataService) {
	var self = this;
	self.navStates = STATES;
    self.showListsAndDetails=false;
	console.log('StoreController initialized');

   self.onAddressChange = function(userAddress) {
        MainDataService.getMainCtrlRestaurants(userAddress, function(isValid, restaurants) {
            if (isValid) {
                self.restaurants = restaurants;
                console.log(self.restaurants);
                self.showListsAndDetails=true;

            }
        });
    };

    self.onRestaurantClick= function(rest){
        self.rest = rest;
        console.log(self.rest);
    }
});