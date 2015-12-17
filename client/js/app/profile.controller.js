(function() {
  'use strict';

  angular
    .module('ideabank')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http'];

  function ProfileController($http) {
    var vm = this;

    vm.profileInfo = {};

    vm.getProfile = getProfile;

    function getProfile() {
      $http
        .get("http://localhost:3000/profile", vm.profileInfo)
        .then(function (response) {
          vm.profileInfo = response.data.ideas;
          console.log(vm.profileInfo);
        });
    }
  }

})();
