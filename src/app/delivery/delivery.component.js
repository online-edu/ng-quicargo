/**
 * Delivery component
 * @class delivery
 * @example
 * <delivery></delivery>
 */
(function() {
  "use strict";
  angular.module("quicargo").component("delivery", {
    templateUrl: "partials/delivery.html",
    controller: [
      "$window",
      function DeliveryController($window) {
        $window.document.title = "My Deliveries | Quicargo";
      }
    ]
  });
})();
