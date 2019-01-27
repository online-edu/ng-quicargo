/**
 * Main entry point
 * @class quicargo
 * @requires dependecies "ngRoute", "ngAnimate", "ngTouch", "ui.bootstrap", "rzModule"
 */
(function() {
  angular
    .module("quicargo", [
      "ngRoute",
      "ngAnimate",
      "ngTouch",
      "ui.bootstrap",
      "rzModule"
    ])
    .config([
      "$routeProvider",
      function config($routeProvider) {
        $routeProvider
          .when("/dashboard", {
            template: "<dashboard></dashboard>",
            activetab: "dashboard"
          })
          .when("/deliveries", {
            template: "<delivery></delivery>",
            activetab: "delivery"
          })
          .when("/history", {
            template: "<history></history>",
            activetab: "history"
          })
          .otherwise("/dashboard");
      }
    ]);
})();
