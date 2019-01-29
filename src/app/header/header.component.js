/**
 * Header component
 * @class sidenav
 * @example
 * <app-nav></app-nav>
 */
(function() {
  "use strict";
  angular.module("quicargo").component("appNav", {
    templateUrl: "partials/header.html",
    bindings: {
      user: "@"
    },
    controller: [function HeaderController() {}]
  });
})();
