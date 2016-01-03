(function() {
  'use strict';

  angular
    .module('ideabank')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', '$scope'];

  function ProfileController($http, $scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

    $scope.getProfile = getProfile;
    $scope.populateChart = populateChart;

    function getProfile() {
      $http
        .get("http://localhost:3000/profile", $scope.profileInfo)
        .then(function (response) {
          populateChart(response.data.pastIdeas);
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
      return amounts;
      }
    }

  }
})();
