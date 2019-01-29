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
      function SidenavController($route, $window) {
        var main = document.getElementById("quicargo-container");
        var sidenav = document.getElementById("sidenav");
        var mainClass = "quicargo-container--full-screen";
        var sideNavClass = "sidenav--collapsed";
        var self = this;
        self.$route = $route;
        self.collapsed = false;
        self.navItems = [
          { link: "dashboard", title: "New Delivery", disabled: false },
          {
            link: "delivery",
            title: "My Deliveries",
            count: 2,
            disabled: false
          },
          { link: "history", title: "History", count: 4, disabled: false }
        ];
        /**
         * @namespace SidenavController
         * @desc Toggles the sidenav on menu click
         */
        self.toggleMenu = function() {
          self.toggleClass(
            [main, sidenav],
            [mainClass, sideNavClass],
            self.collapsed
          );
          self.collapsed = !self.collapsed;
        };
        /**
         * @namespace SidenavController
         * @desc toggles class for main container and side nav
         */
        self.toggleClass = function(elements, klass, add) {
          elements.forEach(function(ele, i) {
            add ? ele.classList.remove(klass[i]) : ele.classList.add(klass[i]);
          });
        };
        $window.matchMedia("(max-width: 700px)").matches && self.toggleMenu();
      }
    ]
  });
})();
