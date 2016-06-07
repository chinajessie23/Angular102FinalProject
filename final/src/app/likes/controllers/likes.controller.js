angular.module('MyApp.Likes')

.controller('LikesController', function(MY_VAL,STATES,MainDataService,getRestsResource,getRestDetailResource) {
	var self = this;
	self.navStates = STATES;
  self.trademark = MY_VAL;
  self.rests =[];

	console.log('LikesController initialized');

    self.showDetails = function(){
          self.showList=true;
          self.getRests();
    }

    self.onRestaurantClick= function(rest){
        self.rest = rest;
        self.showDetail=true;
        self.getRestDetail(rest);
        console.log("self.rest",self.rest);
    }

    self.getRests = function() {
      var resourceObject = getRestsResource;
    	resourceObject.getRests({
        page: 0,
        numResults: 20
      }, function onSuccess(response) {
        self.rests = response;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })

  };

  self.getRestDetail = function(rest){
  	 var resourceObject = getRestDetailResource;
  	 resourceObject.getRestDetails(
        {id:rest._id}
      , function onSuccess(response) {
        // self.someTodo = todo;
        self.rest = response;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })
  }
  
});
