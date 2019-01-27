/**
 * Sidenav component
 * @class sidenav
 * @example
 * <sidenav></sidenav>
 */
(function() {
  "use strict";
  angular.module("quicargo").component("sidenav", {
    templateUrl: "partials/sidenav/sidenav.html",
    controller: function SidenavController($route) {
      var main = document.getElementById("quicargo-container");
      var sidenav = document.getElementById("sidenav");
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
        self.updateStyles(self.collapsed ? "260px" : "75px");
        self.collapsed = !self.collapsed;
      };
      /**
       * @namespace SidenavController
       * @desc update styles for main container and side nav
       */
      self.updateStyles = function(val) {
        main.style.marginLeft = val;
        sidenav.style.width = val;
      };
    }
  });
})();
