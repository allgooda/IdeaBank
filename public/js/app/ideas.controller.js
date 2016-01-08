(function () {
  'use strict';

  angular
    .module('ideabank')
    .controller('IdeasController', IdeasController);

  IdeasController.$inject = ['$http'];

  function IdeasController($http){
    var vm = this;

    vm.ideas = [];
    vm.newIdea = {};

    vm.submitIdea = submitIdea;

    function submitIdea() {
      $http
        .post("mongodb://adamsdb:ideabank@ds039195.mongolab.com:39195/ideabank/ideas", vm.newIdea)
        .then(function (response) {
          vm.ideas.push(response.data);
          vm.newIdea = {};
        });
    }
  }
})();
