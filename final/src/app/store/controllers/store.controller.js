angular.module('MyApp.Store')

.controller('StoreController', function(MY_VAL,STATES,MainDataService) {
	var self = this;
	self.navStates = STATES;
    self.trademark = MY_VAL;

	console.log('StoreController initialized');

   self.onAddressChange = function(userAddress) {
        self.showList=false;
        self.showDetail=false;
        MainDataService.getMainCtrlRestaurants(userAddress, function(isValid, restaurants) {
            if (isValid) {
                self.restaurants = restaurants;
                console.log(self.restaurants);
            }
            console.log("set to flase")    
        });
    };

    self.showDetails = function(){
          self.showList=true;
    }

    self.onRestaurantClick= function(rest){
        self.rest = rest;
        self.showDetail=true;
        console.log("self.rest",self.rest);
    }
});