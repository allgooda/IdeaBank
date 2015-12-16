(function() {
  "use strict";

  angular
    .module("ideabank", ['ui.router'])
    .config(router);

  function router($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html'
      })

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
  }

})();

