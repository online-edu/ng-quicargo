/**
 * SideNav Service
 * @class sidenavService
 */
(function() {
  "use strict";
  angular.module("quicargo").factory("sidenavService", [
    function() {
      /**
       * @function getNavItems
       * @desc list of nav items
       * @returns {Array}
       */
      var getNavItems = function() {
        return [
          { link: "dashboard", title: "New Delivery", disabled: false },
          {
            link: "delivery",
            title: "My Deliveries",
            count: 2,
            disabled: false
          },
          { link: "history", title: "History", count: 4, disabled: false }
        ];
      };
      /**
       * @function toggleClass
       * @desc toggles class for main container and side nav
       * @parms {Object[]} elements - List of elements
       * @parms {string[]} klass - List of css classes to be operated.
       * @parms {boolean} add - Flad whether to add or remove class.
       */
      var toggleClass = function(elements, klass, add) {
        elements.forEach(function(ele, i) {
          add ? ele.classList.remove(klass[i]) : ele.classList.add(klass[i]);
        });
      };

      return {
        getNavItems: getNavItems,
        toggleClass: toggleClass
      };
    }
  ]);
})();
