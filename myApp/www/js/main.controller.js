(function(){
function authInterceptor(API, auth) {
  return {
    // automatically attach Authorization header
    request: function(config) {
      return config;
    },

    // If a token was sent back, save it
    response: function(res) {
      return res;
    },
  }
}

function authService($window) {
  var self = this;

  // Add JWT methods here
}

function userService($http, API, auth) {
  var self = this;
  self.getQuote = function() {
    return $http.get(API + '/auth/quote')
  }

  // add authentication methods here

}

// We won't touch anything in here
function MainCtrl($http, user, auth) {
  var self = this;

  function handleRequest(res) {
    var token = res.data ? res.data.token : null;
    if(token) { console.log('JWT:', token); }
    self.message = res.data.message;
  }

  self.login = function(email, password) {
    return $http.post(API + '/auth/login', {
      email:email,
      password:password
    });

  }
  self.register = function(email, password) {
    return $http.post(API + '/auth/register', {
      email: email,
      password: password
    });
  }
  self.getQuote = function() {
    user.getQuote()
      .then(handleRequest, handleRequest)
  }
  self.logout = function() {
    auth.logout && auth.logout()
  }
  self.isAuthed = function() {
    return auth.isAuthed ? auth.isAuthed() : false
  }
}

angular.module('app', [])
.factory('authInterceptor', authInterceptor)
.service('user', userService)
.service('auth', authService)
.constant('API', 'http://test-routes.herokuapp.com')
.config(function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})
.controller('Main', MainCtrl)
})();
