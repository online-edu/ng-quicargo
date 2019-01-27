/**
 * Dashboard Service
 * @class dashboardService
 */
(function() {
  "use strict";
  angular.module("quicargo").factory("dashboardService", [
    "$q",
    "$http",
    function($q, $http) {
      return {
        getCountries: function() {
          var defer = $q.defer();
          $http({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/all"
          }).then(function(countries) {
            defer.resolve(countries.data);
          });
          return defer.promise;
        }
      };
    }
  ]);
})();
