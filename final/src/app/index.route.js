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
    .state(STATES.kAboutState, {
      url: '/about',
      // template: '<h3>Hello world</h3>',
      templateUrl: 'app/about/partials/about.main.html',
      controller: 'AboutController as ctrl'
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

    .state(STATES.kLoginState /*home.login*/, {
      url:'/login',
      templateUrl: 'app/home/partials/login.html',
    })
    .state(STATES.kSignupState, {
      url:'/signup',
      templateUrl: 'app/home/partials/signup.html',
    })
    .state(STATES.kManageState, {
      url:'/manage',
      templateUrl: 'app/home/partials/manage.html',
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
    //this is not in use yet.
    // .state(STATES.kRestaurantDetailState, {
    //   url:'/restaurant',
    //   templateUrl: 'app/store/partials/restaurantsDetails.html',
    // });

    $urlRouterProvider.otherwise('/');
  }

})();
