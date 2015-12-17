(function() {
  "use strict";

  angular
    .module("ideabank", ['ui.router'])
    .config(router);

  function router($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile.html'
      })

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
  }

})();

