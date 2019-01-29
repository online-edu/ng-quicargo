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
        self.pickers = {
          pickup: false,
          delivery: false
        };
        self.loader = true;
        self.freightGood = "";
        self.pickupSlider = dashboardService.sliderOptions();
        self.deliverySlider = dashboardService.sliderOptions();
        self.goods = ["Paper", "Plastic", "Textil", "Other"];
        /* self.delivery = {
      route: {
        pickup: {
          city: "",
          address: "",
          date: "",
          time: ""
        },
        deliver: {
          city: "",
          address: "",
          date: "",
          time: ""
        }
      },
      freight: {
        goods: "",
        volume: {
          type: "",
          qty: "",
          length: "",
          width: "",
          height: ""
        },
        weight: ""
      }
    }; */

        dashboardService.getCountries().then(function(data) {
          self.countries = data;
          self.loader = false;
        });

        self.onGoodsClick = function(good) {
          self.freightGood = good;
        };

        self.openPickupDate = function() {
          self.pickers.pickup = true;
          self.pickers.delivery = false;
        };

        self.openDeliveryDate = function() {
          self.pickers.delivery = true;
          self.pickers.pickup = false;
        };

        self.onSubmit = function(isValid) {
          console.log(self.delivery, isValid);
        };

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
