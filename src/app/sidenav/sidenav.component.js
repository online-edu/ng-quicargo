/**
 * Sidenav component
 * @class sidenav
 * @example
 * <sidenav></sidenav>
 */
(function() {
  "use strict";
  angular.module("quicargo").component("sidenav", {
    templateUrl: "partials/sidenav.html",
    controller: [
      "$route",
      "$window",
      "sidenavService",
      function SidenavController($route, $window, sidenavService) {
        var main = document.getElementById("quicargo-container");
        var sidenav = document.getElementById("sidenav");
        var mainClass = "quicargo-container--full-screen";
        var sideNavClass = "sidenav--collapsed";
        var self = this;
        self.$route = $route;
        self.collapsed = false;
        self.navItems = sidenavService.getNavItems();
        /**
         * @namespace SidenavController
         * @desc Toggles the sidenav on menu click
         */
        self.toggleMenu = function() {
          sidenavService.toggleClass(
            [main, sidenav],
            [mainClass, sideNavClass],
            self.collapsed
          );
          self.collapsed = !self.collapsed;
        };
        $window.matchMedia("(max-width: 700px)").matches && self.toggleMenu();
      }
    ]
  });
})();
