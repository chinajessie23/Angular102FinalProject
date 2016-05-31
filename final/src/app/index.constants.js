/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')


    .constant('STATES', {
    	kHomeState: 'home',
    	kLikesState: 'likes',
    	kStoreState: 'store',

    	// Contacts child states
    	kCEOState: 'likes.ceo',
    	kPresidentState: 'likes.president',
    	kFounderState: 'likes.founder',

    	// Store child states
        kRestaurantsState:'store.restaurants',
    	kShoesState: 'store.shoes',
        kRestaurantDetailState:'store.restaurants.restaurant'

    });

})();
