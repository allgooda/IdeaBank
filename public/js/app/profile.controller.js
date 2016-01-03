(function() {
  'use strict';

  angular
    .module('ideabank')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', '$scope'];

  function ProfileController($http, $scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

    $http
      .get("http://localhost:3000/profile")
      .then(function (response) {
        var profileData = populateChart(response.data.pastIdeas);
        $scope.data = [];
        $scope.data.push(profileData);
        console.log($scope.data);
      });

    function populateChart(pastIdeas) {
      console.log(pastIdeas);
      var amounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for(var i=0; i < pastIdeas.length; i++) {
        var ideaDate = new Date(pastIdeas[i].date);
        var month = ideaDate.getMonth();
        console.log(month);
        if(month === 0){
          amounts[0] = 1 + amounts[0];
        }
        else if(month === 1){
          amounts[1] = 1 + amounts[1];
        }
        else if(month === 2){
          amounts[2] = 1 + amounts[2];
        }
        else if(month === 3){
          amounts[3] = 1 + amounts[3];
        }
        else if(month === 4){
          amounts[4] = 1 + amounts[4];
        }
        else if(month === 5){
          amounts[5] = 1 + amounts[5];
        }
        else if(month === 6){
          amounts[6] = 1 + amounts[6];
        }
        else if(month === 7){
          amounts[7] = 1 + amounts[7];
        }
        else if(month === 8){
          amounts[8] = 1 + amounts[8];
        }
        else if(month === 9){
          amounts[9] = 1 + amounts[9];
        }
        else if(month === 10){
          amounts[10] = 1 + amounts[10];
        }
        else if(month === 11){
          amounts[11] = 1 + amounts[11];
        }
      }
      return amounts;
    }
  }
})();
