
(function() {
	angular.module('MyApp.Common')

	.controller('CommonController', function(MY_VAL, CurrentUser, STATES) {
		var self = this;
		self.name = 'George'
		console.log('HomeController initialized');

		self.user = cachedUser;

		self.loggedInUser = CurrentUser.getCurrentUser();

		self.trademark = MY_VAL;

		self.navStates = STATES;

		self.phoneExp = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;

    	self.states = {
    	NY: 'New York',
    	FL: 'Florida',
    	CA: 'California'
    	}
	});


})()


