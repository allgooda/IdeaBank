(function() {
  'use strict';

  angular
    .module('ideabank', ['chart.js'])
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', '$scope'];

  function ProfileController($http, $scope) {


    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
  //   vm.profileInfo = {};

  //   vm.getProfile = getProfile;

  //   function getProfile() {
  //     $http
  //       .get("http://localhost:3000/profile", vm.profileInfo)
  //       .then(function (response) {
  //         vm.profileInfo = response.data.ideas;
  //         console.log(vm.profileInfo);
  //       });
  //   }
  // }
  }
})();
