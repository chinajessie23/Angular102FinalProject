
(function() {

	var cachedUser = {
		fname: 'Jiasi',
		lname: 'Chen'
	};

	angular.module('MyApp.Home')

	.controller('HomeController', function(MY_VAL, CurrentUser, STATES,addRestResource,addUserResource,getUserResource,getRestsResource) {
		var self = this;
		self.name = 'George'
		console.log('HomeController initialized');

		self.user = cachedUser;

		self.loggedInUser = CurrentUser.getCurrentUser();

		self.trademark = MY_VAL;

		self.navStates = STATES;

		self.phoneExp = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
		getRests();

		  function getRests(){
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
  self.addRest = function(rest) {
        self.addedRest = true;

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
  
 		self.addUser = function(user) {
        self.addedRest = true;
        self.showSignup=false;

        var resourceObject = addUserResource;

        resourceObject.addUser(
        {fname: user.fname, lname: user.lname,username:user.username, password:user.password}
          , function onSuccess(response) {
             // self.thisRest._id = response._id;
            self.rests.push(response);
            console.log("self.users", self.users)
            console.log('SUCCESS: ', response)
          }, function onError(errorMessage) {
            console.log('ERROR: ', errorMessage)
          })
  		};

		  // self.getAllUsers =function() {
		  //   var resourceObject = userListResource;
		  //   resourceObject.getUsers({
		  //       page: 0,
		  //       numResults: 55
		  //     }, function onSuccess(response) {
		  //       self.users = response;
		  //       console.log('SUCCESS: ', response)
		  //     }, function onError(errorMessage) {
		  //       console.log('ERROR: ', errorMessage)
		  //     })
		  // }

		  function getUser(user){
		  	var resourceObject = getUserResource;
    	resourceObject.getUser(
        {username:user.username}
      , function onSuccess(response) {
        self.user= user;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })
		  }

		self.login = function(user){
  		if (self.loginForm.$valid) {
  			getUser(user);
			if(self.user.password == user.password){
				self.user = user;
				self.loggedUser = self.user;
			}
			else{
				self.user=null;
				self.loggedUser = 'invalidate username or password';
			}
			self.showLogin = false;
	    	} 
  		}

    	self.logout = function() {
    		self.loggedInUser = null;
			self.showLogin = true;
   		};

    	self.states = {
    	NY: 'New York',
    	FL: 'Florida',
    	CA: 'California'
    	}
	});


})()


