/**
 * Sidenav component
 * @class sidenav
 * @example
 * <sidenav></sidenav>
 */
(function() {
  "use strict";
  angular.module("quicargo").component("sidenav", {
    templateUrl: "sidenav/sidenav.html",
    controller: function SidenavController() {
      var main = document.getElementById("quicargo-container");
      var sidenav = document.getElementById("sidenav");

      this.collapsed = false;
      this.navItems = [
        { link: "", title: "New Delivery", disabled: false },
        { link: "", title: "My Deliveries", count: 2, disabled: true },
        { link: "", title: "History", count: 4, disabled: true }
      ];
      /**
       * @namespace SidenavController
       * @desc Toggles the sidenav on menu click
       */
      this.toggleMenu = function() {
        this.updateStyles(this.collapsed ? "260px" : "70px");
        this.collapsed = !this.collapsed;
      };
      /**
       * @namespace SidenavController
       * @desc update styles for main container and side nav
       */
      this.updateStyles = function(val) {
        main.style.marginLeft = val;
        sidenav.style.width = val;
      };
    }
  });
})();
