
(function() {

	var cachedUser = {
		fname: 'Jiasi',
		lname: 'Chen'
	};

	angular.module('MyApp.Home')

	.controller('HomeController', function(MY_VAL, CurrentUser, STATES) {
		var self = this;
		self.name = 'George'
		console.log('HomeController initialized');

		self.user = cachedUser;

		self.loggedInUser = CurrentUser.getCurrentUser();

		self.trademark = MY_VAL;

		self.navStates = STATES;

		self.phoneExp = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
		self.showForm=true;

    	self.submitLoginForm = function() {
    	if (self.loginForm.$valid) {
			self.loggedInUser = self.user.fname.concat(" "+self.user.lname)
			self.showForm = false;
	    	} 
    };

    self.logout = function() {
    		self.loggedInUser = null;
			self.showForm = true;
    };

    	self.states = {
    	NY: 'New York',
    	FL: 'Florida',
    	CA: 'California'
    	}
	});


})()


