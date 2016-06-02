
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
	});


})()


