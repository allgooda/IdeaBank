(function() {
  'use strict';

  angular
    .module('ideabank')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', '$scope'];

  function ProfileController($http, $scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
    $scope.colours = [{
    fillColor: 'rgba(47, 132, 71, 0.8)',
    strokeColor: 'rgba(47, 132, 71, 0.8)',
    highlightFill: 'rgba(47, 132, 71, 0.8)',
    highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];

    $scope.options =  {

      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether to show lines for each scale point
      scaleShowLine : true,

      //Boolean - Whether we show the angle lines out of the radar
      angleShowLineOut : true,

      //Boolean - Whether to show labels on the scale
      scaleShowLabels : false,

      // Boolean - Whether the scale should begin at zero
      scaleBeginAtZero : true,

      //String - Colour of the angle line
      angleLineColor : 'rgba(0,0,0,.9)',

      //Number - Pixel width of the angle line
      angleLineWidth : 1,

      //String - Point label font declaration
      pointLabelFontFamily : '"Arial"',

      //String - Point label font weight
      pointLabelFontStyle : 'bold',

      //Number - Point label font size in pixels
      pointLabelFontSize : 18,

      //String - Point label font colour
      pointLabelFontColor : 'black',

      //Boolean - Whether to show a dot for each point
      pointDot : true,

      //Number - Radius of each point dot in pixels
      pointDotRadius : 5,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke : false,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };


    $http
      .get("/profile")
      .then(function (response) {
        var profileData = populateChart(response.data.pastIdeas);
        $scope.data = [];
        $scope.data.push(profileData);
        $scope.name = response.data.name;
        $scope.totalIdeas = response.data.pastIdeas.length;
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
