/**
 * Dashboard component
 * @class dashboard
 * @example
 * <dashboard></dashboard>
 */
(function() {
  angular.module("quicargo").component("dashboard", {
    templateUrl: "partials/dashboard.html",
    controller: [
      "dashboardService",
      "$window",
      function DashboardController(dashboardService, $window) {
        var self = this;
        $window.document.title = "Dashboard";
        self.countries = [];
        self.pallets = dashboardService.getVolumeTypes();
        self.dateOptions = dashboardService.getDateOptions();
        self.loader = true;
        self.freightGood = "";
        self.pickupSlider = dashboardService.getSliderOptions();
        self.deliverySlider = dashboardService.getSliderOptions();
        self.goods = ["Paper", "Plastic", "Textil", "Other"];
        self.delivery = {};
        self.pickers = {
          pickup: false,
          delivery: false
        };

        dashboardService.getCountries().then(function(data) {
          self.countries = data;
          self.loader = false;
        });
        /**
         * @namespace DashboardController
         * @function onGoodsClick
         * @desc Capture selectd good.
         */
        self.onGoodsClick = function(good) {
          self.freightGood = good;
        };
        /**
         * @namespace DashboardController
         * @function openPickupDate
         * @desc Set pickup datepicker visibility
         */
        self.openPickupDate = function() {
          self.pickers.pickup = true;
          self.pickers.delivery = false;
        };
        /**
         * @namespace DashboardController
         * @function openDeliveryDate
         * @desc Set delivery datepicker visibility
         */
        self.openDeliveryDate = function() {
          self.pickers.delivery = true;
          self.pickers.pickup = false;
        };
        /**
         * @namespace DashboardController
         * @function onSubmit
         * @desc Performs actions on form submission
         * @param {boolean} isValid
         */
        self.onSubmit = function(isValid) {
          console.log(self.delivery, isValid);
        };
        /**
         * @namespace DashboardController
         * @function reset
         * @desc Resets the form
         * @param {Object} form
         */
        self.reset = function(form) {
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
        };
        self.reset();
      }
    ]
  });
})();
