angular.module('MyApp.Contacts')

.controller('ContactsController', function(STATES, MY_VAL) {
	var self = this;
	self.navStates = STATES;
	console.log('ContactsController initialized');

	console.log(MY_VAL);
});