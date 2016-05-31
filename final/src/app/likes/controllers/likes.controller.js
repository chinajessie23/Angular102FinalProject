angular.module('MyApp.Likes')

.controller('LikesController', function(STATES, MY_VAL) {
	var self = this;
	self.navStates = STATES;
	console.log('LikesController initialized');

	console.log(MY_VAL);
});