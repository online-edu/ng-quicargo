/**
 * Main entry point
 * @class quicargo
 * @requires dependecies "ngRoute", "ngAnimate", "ngTouch", "ui.bootstrap"
 */
(function() {
  angular
    .module("quicargo", ["ngRoute", "ngAnimate", "ngTouch", "ui.bootstrap"])
    .config([
      "$routeProvider",
      function config($routeProvider) {
        $routeProvider
          .when("/dashboard", {
            template: "<dashboard></dashboard>"
          })
          .otherwise("/dashboard");
      }
    ]);
})();
