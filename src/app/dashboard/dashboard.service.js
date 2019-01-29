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
      const sliderOptions = function() {
        return {
          minValue: 0,
          maxValue: 24,
          options: {
            floor: 0,
            ceil: 24,
            step: 0.5,
            precision: 1,
            getPointerColor: function(value) {
              return "#862086";
            },
            getSelectionBarColor: function(value) {
              return "#5A6268";
            },
            translate: function(value, sliderId, label) {
              switch (label) {
                case "model":
                  return getHours(value.toString());
                case "high":
                  return getHours(value.toString());
                default:
                  return value;
              }
            }
          }
        };
      };

      const getCountries = function() {
        var defer = $q.defer();
        $http({
          method: "GET",
          url: "https://restcountries.eu/rest/v2/all"
        }).then(function(countries) {
          defer.resolve(countries.data);
        });
        return defer.promise;
      };

      const getDateOptions = function() {
        return {
          formatYear: "yy",
          maxDate: new Date(2020, 5, 22),
          minDate: new Date(),
          startingDay: 1
        };
      };

      const getHours = function(hrs) {
        let hm = hrs.split(".");
        return hm.length > 1
          ? hm[0] + ":".concat(hm[1] == 5 ? "30" : "00")
          : hm[0] + ":00";
      };

      const getVolumeTypes = function() {
        return [
          { id: 0, name: "Block pallet" },
          { id: 1, name: "Stringer pallet" }
        ];
      };

      return {
        getCountries: getCountries,
        getDateOptions: getDateOptions,
        getVolumeTypes: getVolumeTypes,
        sliderOptions: sliderOptions
      };
    }
  ]);
})();
