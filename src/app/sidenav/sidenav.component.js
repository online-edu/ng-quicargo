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
      "$document",
      "sidenavService",
      function SidenavController($route, $window, $document, sidenavService) {        
        var main = $document[0].getElementById("quicargo-container");
        var sidenav = $document[0].getElementById("sidenav");
        var mainClass = "quicargo-container--full-screen";
        var sideNavClass = "sidenav--collapsed";
        var self = this;
        self.$route = $route;
        self.collapsed = false;
        self.navItems = sidenavService.getNavItems();
        /**
         * @namespace SidenavController
         * @function toggleMenu
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
