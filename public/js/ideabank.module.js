(function() {
  "use strict";

  angular
    .module("ideabank", ['ui.router', 'chart.js'])
    .config(router);

  function router($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile.html',
        controller: "ProfileController"
      })

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'MainController'
      })
  }

})();

