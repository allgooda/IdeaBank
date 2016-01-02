(function() {
  'use strict';

  angular
    .module('ideabank')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', '$scope'];

  function ProfileController($http, $scope) {
    // var vm = this;

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
    $scope.data = [
    [65, 59, 90, 81, 56, 55, 40, 28, 48, 40, 19],
  ];
    $scope.profileInfo = [];

  $scope.getProfile = getProfile;

    function getProfile() {
      $http
        .get("http://localhost:3000/profile", $scope.profileInfo)
        .then(function (response) {
          console.log(response.data);
          console.log($scope.profileInfo);
          // $scope.profileInfo = response.data

        });
    }
  }
})();
