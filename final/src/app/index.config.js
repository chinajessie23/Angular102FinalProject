(function() {
  'use strict';

  angular
    .module('template')
    .config(config);

  /** @ngInject */
  function config(CurrentUserProvider) {
  	CurrentUserProvider.setUser('you are not logged in');
  }

})();
