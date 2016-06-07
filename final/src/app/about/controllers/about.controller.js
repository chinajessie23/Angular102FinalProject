
(function() {
	angular.module('MyApp.About')

	.controller('AboutController', function(MY_VAL, STATES) {
		var self = this;
		console.log('AboutController initialized');

		self.trademark = MY_VAL;

		self.navStates = STATES;
});


})()


