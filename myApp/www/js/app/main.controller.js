(function() {
  "use strict";

  angular
    .module("ideabank")
    .controller("MainController", MainController);

  MainController.$inject = ["$log", "userDataService", "authService"];

  function MainController($log, userDataService, authService) {
    var vm = this;

    vm.auth = authService;
    vm.user = userDataService;

    vm.successMessage = "Present all of the current user's data here.";
    vm.failureMessage = "Present any error messages here.";

    vm.createUser = function() {
      var pr = vm.user.create();

      pr.then(
        function(data, status, headers, config) {
          $log.log("SUCCESS", data);

          vm.successMessage = angular.toJson(data.data);
          vm.failureMessage = "Present any error messages here.";
          vm.user.clear();
        },
        function(data, status, headers, config) {
          $log.log("FAILURE", data);

          vm.successMessage = "Present all of the current user's data here.";
          vm.failureMessage = angular.toJson(data.data);
        }
      );
    }

    vm.logInUser = function() {
      vm.auth.logIn()

      .then(function(data) {
        $log.debug("Success:", data)

        return vm.user.currentUserData();
      })

      .then(function(data) {
        $log.debug("Success:", data)

        vm.auth.clear();

        vm.successMessage = angular.toJson(data.data);
        vm.failureMessage = "Present error message here!";
      })

      .catch(function(data, status, headers, config) {
        $log.debug("Failure:", data,status,headers,config)

        vm.successMessage = "Present all of the current users data here."
        vm.failureMessage = angular.toJson(data.data);
      });
    }
  }


})();
