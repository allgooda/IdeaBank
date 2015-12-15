(function() {
  "use strict";

  angular
    .module("ideabank")
    .factory("userDataService", userDataService);

  userDataService.$inject = ["$log", "$http"];

  function userDataService($log, $http) {
    var user = {
      name:     "adam",
      email:    "adam@adam.com",
      password: "12345",
      interval: 60000,
      create:   create
    };

    return user;

    function create() {
      $log.debug("Attempting to create user:", user);

      return $http({
        method: "POST",
        url:    "http://localhost:3000/api/users",
        headers: {"Content-Type": "application/json"},
        data: angular.toJson({
          name:     user.name,
          email:    user.email,
          password: user.password,
          interval: user.interval
        })
      });
    }
  }

})();
