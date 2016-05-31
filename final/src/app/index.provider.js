(function() {
  'use strict';

  angular
    .module('template')
    .provider('CurrentUser', function() {
        var self = this;
        var currentlyLoggedInUser;

        self.setUser = function(user) {
            currentlyLoggedInUser = user;
        };

        self.$get = function() {
            return {
                getCurrentUser: function() {
                    return currentlyLoggedInUser;
                }
            }
        };
    });

})();
