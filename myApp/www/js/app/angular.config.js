(function() {
  "use strict";

  angular
    .module("ideabank")
    .config(configure);

  configure.$inject = ["$httpProvider"];

  function configure($httpProvider) {
    // console.log("Adding tokenSigningService interceptor.");
    $httpProvider.interceptors.push("tokenSigningService");
  }

})();
