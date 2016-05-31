(function() {
  'use strict';

  angular
    .module('template')
    
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATES) {

    $stateProvider
    .state(STATES.kHomeState, {
      url: '/',
      templateUrl: 'app/home/partials/home.main.html',
      controller: 'HomeController as ctrl'
      // controllerAs: 'ctrl'
    })
    .state(STATES.kContactsState, {
      url: '/contacts',
      templateUrl: 'app/contacts/partials/contacts.main.html',
      controller: 'ContactsController as ctrl'
    })
    .state(STATES.kStoreState, {
      url: '/store',
      // template: '<h3>Hello world</h3>',
      templateUrl: 'app/store/partials/store.main.html',
      controller: 'StoreController as ctrl'
    })


    //Contacts child-states
    .state(STATES.kCEOState /*contacts.ceo*/, {
      url:'/ceo',
      templateUrl: 'app/contacts/partials/ceo.html',
    })
    .state(STATES.kPresidentState, {
      url:'/president',
      templateUrl: 'app/contacts/partials/president.html',
    })
    .state(STATES.kFounderState, {
      url:'/founder',
      templateUrl: 'app/contacts/partials/founder.html',
    })

    // Store child-sibling states
    .state(STATES.kRestaurantsState, {
      views: {
        listView: {
          templateUrl: 'app/store/partials/restaurantsList.html',
        },
        detailView: {
          templateUrl: 'app/store/partials/restaurantsDetails.html',
        }
      }
    })
    .state(STATES.kShoesState, {
      views: {
        listView: {
          templateUrl: 'app/store/partials/shoesList.html',
        },
        detailView: {
          templateUrl: 'app/store/partials/shoesDetails.html',
        }
      }
    })

    //Restaurant child-state
    .state(STATES.kRestaurantDetailState, {
      url:'/restaurant',
      templateUrl: 'app/store/partials/restaurantsDetails.html',
    });

    $urlRouterProvider.otherwise('/');
  }

})();
