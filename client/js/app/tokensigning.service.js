(function() {
  "use strict";

  angular
    .module("ideabank")
    .factory("tokenSigningService", tokenSigningService);

  tokenSigningService.$inject = ["tokenService", "$log", "$location", "$q"];

  function tokenSigningService(tokenService, $log, $location, $q) {
    return {
      request:       signWithToken,
      responseError: redirectToLogin
    };

    function signWithToken(request) {
      var token = tokenService.get();
      if (token) {
        $log.debug("Token exists; signing request.");
        request.headers['Authorization'] = `Bearer ${token}`;
      }

      return request;
    }

    function redirectToLogin(response) {

      console.log("We have a response error.")

      // if our server returns a 40X failed auth response
      if (response.status == 400 ||
          response.status == 401 ||
          response.status == 403) {
        tokenService.clear();
        $location.path('/login');
      }

      // return the errors from the server as a promise
      return $q.reject(response);
    };

  }

})();
