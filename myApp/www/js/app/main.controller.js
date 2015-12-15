(function() {
  "use strict";

  angular
    .module("ideabank")
    .controller("MainController", MainController);

  MainController.$inject = ["$log", "userDataService"];

  function MainController($log, userDataService) {
    var vm = this;

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
  }
})();
