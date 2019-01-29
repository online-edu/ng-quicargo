/**
 * History component
 * @class history
 * @example
 * <history></history>
 */
(function() {
  "use strict";
  angular.module("quicargo").component("history", {
    templateUrl: "partials/history.html",
    controller: [
      "$window",
      function HistoryController($window) {
        $window.document.title = "History | Quicargo";
      }
    ]
  });
})();
