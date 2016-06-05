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
    .state(STATES.kLikesState, {
      url: '/likes',
      templateUrl: 'app/likes/partials/likes.main.html',
      controller: 'LikesController as ctrl'
    })
    .state(STATES.kStoreState, {
      url: '/store',
      // template: '<h3>Hello world</h3>',
      templateUrl: 'app/store/partials/store.main.html',
      controller: 'StoreController as ctrl'
    })


    //Likes child-sibling states
    .state(STATES.kRestaurantsLikeState, {
      views: {
        listView: {
          templateUrl: 'app/likes/partials/restaurantsLikeList.html',
        },
        detailView: {
          templateUrl: 'app/likes/partials/restaurantsLikeDetails.html',
        }
      }
    })
    .state(STATES.kShoesLikeState, {
      views: {
        listView: {
          templateUrl: 'app/likes/partials/shoesLikeList.html',
        },
        detailView: {
          templateUrl: 'app/likes/partials/shoesLikeDetails.html',
        }
      }
    })
    // .state(STATES.kCEOState /*likes.ceo*/, {
    //   url:'/ceo',
    //   templateUrl: 'app/likes/partials/ceo.html',
    // })
    // .state(STATES.kPresidentState, {
    //   url:'/president',
    //   templateUrl: 'app/likes/partials/president.html',
    // })
    // .state(STATES.kFounderState, {
    //   url:'/founder',
    //   templateUrl: 'app/likes/partials/founder.html',
    // })

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
    //this is not in use yet.
    // .state(STATES.kRestaurantDetailState, {
    //   url:'/restaurant',
    //   templateUrl: 'app/store/partials/restaurantsDetails.html',
    // });

    $urlRouterProvider.otherwise('/');
  }

})();
