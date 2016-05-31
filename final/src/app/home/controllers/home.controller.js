
(function() {

	var cachedUser = {
		fname: 'George',
		lname: 'Dagher'
	};

	angular.module('MyApp.Home')

	.controller('HomeController', function(MY_VAL, CurrentUser, STATES) {
		var self = this;
		self.name = 'George'
		console.log('HomeController initialized');

		self.user = cachedUser;

		self.loggedInUser = CurrentUser.getCurrentUser();

		console.log(MY_VAL);

		self.navStates = STATES;
	});


})()


