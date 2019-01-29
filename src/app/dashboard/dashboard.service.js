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
      /**
       * @function getSliderOptions
       * @desc Time slider options
       * @returns {Object}
       */
      var getSliderOptions = function() {
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
                  return getHours(value);
                case "high":
                  return getHours(value);
                default:
                  return value;
              }
            }
          }
        };
      };
      /**
       * @function getCountries
       * @desc List of countries from API.
       * @returns {Object[]}
       */
      var getCountries = function() {
        var defer = $q.defer();
        $http({
          method: "GET",
          url: "https://restcountries.eu/rest/v2/all"
        }).then(function(countries) {
          var data = [];
          if (countries.status == 200 && countries.data) {
            data = countries.data.map(function(country) {
              return { name: country.name, id: country.alpha2Code };
            });
          }
          defer.resolve(data);
        });
        return defer.promise;
      };
      /**
       * @function getDateOptions
       * @desc date picker options
       * @returns {Object}
       */
      var getDateOptions = function() {
        return {
          formatYear: "yy",
          maxDate: new Date(2020, 5, 22),
          minDate: new Date(),
          startingDay: 1
        };
      };
      /**
       * @function getTimes
       * @desc time for delivery and pickup
       * @returns {Object}
       */
      var getTimes = function(data) {
        return {
          from: getHours(data.minValue),
          to: getHours(data.maxValue)
        };
      };
      /**
       * @function getHours
       * @desc Extract and formate time in hh:mm
       * @returns {string}
       */
      var getHours = function(hrs) {
        hrs = hrs.toString();
        var hm = hrs.split(".");
        return hm.length > 1
          ? hm[0] + ":".concat(hm[1] == 5 ? "30" : "00")
          : hm[0] + ":00";
      };
      /**
       * @function getVolumeTypes
       * @desc List of voume types
       * @returns {Object[]}
       */
      var getVolumeTypes = function() {
        return [
          { id: 0, name: "Block pallet" },
          { id: 1, name: "Stringer pallet" }
        ];
      };
      return {
        getCountries: getCountries,
        getDateOptions: getDateOptions,
        getVolumeTypes: getVolumeTypes,
        getSliderOptions: getSliderOptions,
        getTimes: getTimes
      };
    }
  ]);
})();
