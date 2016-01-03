(function() {
  'use strict';

  angular
    .module('ideabank')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', '$scope'];

  function ProfileController($http, $scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

  $scope.getProfile = getProfile;

    function getProfile() {
      $http
        .get("http://localhost:3000/profile")
        .then(function (response) {
          var profileData = populateChart(response.data.pastIdeas);
          $scope.data = [];
          $scope.data.push(profileData);
          console.log($scope.data);
        });
    }

    function populateChart(pastIdeas) {
      console.log(pastIdeas);
      var amounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for(var i=0; i < pastIdeas.length; i++) {
        var ideaDate = new Date(pastIdeas[i].date);
        var month = ideaDate.getMonth();
        console.log(month);
        if(month === 0){
          amounts[0] = 1 + amounts[0];
          console.log(amounts);
        }
      amounts[5] = 10;
      return amounts;
      }
    }
  }
})();
