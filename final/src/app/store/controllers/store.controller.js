angular.module('MyApp.Store')

.controller('StoreController', function(MY_VAL,STATES,MainDataService,addRestResource) {
	var self = this;
	self.navStates = STATES;
  self.trademark = MY_VAL;
  self.rests =[];

	console.log('StoreController initialized');

   self.onAddressChange = function(userAddress) {
        self.showList=false;
        self.showDetail=false;
        MainDataService.getMainCtrlRestaurants(userAddress, function(isValid, restaurants) {
            if (isValid) {
                self.restaurants = restaurants;
                console.log(self.restaurants);
            }
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

    self.addRest = function(rest) {
        var resourceObject = addRestResource;

        resourceObject.addRest(
        {name: rest.name, rating: rest.rating,website:rest.mobile_url,phone:rest.display_phone,image:rest.image_url}
          , function onSuccess(response) {
             // self.thisRest._id = response._id;
            self.rests.push(response);
            console.log("self.rests", self.rests)
            console.log('SUCCESS: ', response)
          }, function onError(errorMessage) {
            console.log('ERROR: ', errorMessage)
          })
  };
  
});