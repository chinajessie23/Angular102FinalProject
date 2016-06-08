
(function() {

	var cachedUser = {
		fname: 'Jiasi',
		lname: 'Chen'
	};

	angular.module('MyApp.Home')

	.controller('HomeController', function(MY_VAL, CurrentUser, STATES,addUserResource,getUserResource) {
		var self = this;
		self.name = 'George'
		console.log('HomeController initialized');

		self.user = cachedUser;

		self.loggedInUser = CurrentUser.getCurrentUser();

		self.trademark = MY_VAL;

		self.navStates = STATES;

		self.phoneExp = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;

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
        self.user = user;
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
				self.loggedInUser = self.user.username;

			}
			else{
				self.user=null;
				self.loggedInUser = 'invalidate username or password';
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


