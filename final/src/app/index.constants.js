/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')


    .constant('STATES', {
    	kHomeState: 'home',
    	kLikesState: 'likes',
    	kStoreState: 'store',
        kAboutState: 'about',

        kLoginState: 'home.login',
        kSignupState: 'home.signup',
        kManageState:'home.manage',

    	// Likes child states
    	kRestaurantsLikeState: 'likes.restaurants',
    	kShoesLikeState: 'likes.shoes',

    	// Store child states
        kRestaurantsState:'store.restaurants',
    	kShoesState: 'store.shoes',
        // kRestaurantDetailState:'store.restaurants.restaurant'

    });

})();
