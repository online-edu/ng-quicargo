/**
 * Dashboard component
 * @class dashboard
 * @example
 * <dashboard></dashboard>
 */
(function() {
  angular.module("quicargo").component("dashboard", {
    templateUrl: "partials/dashboard/dashboard.html",
    controller: [
      "dashboardService",
      "$window",
      function DashboardController(dashboardService, $window) {
        var self = this;
        $window.document.title = "Dashboard";
        self.pallets = [
          { id: 0, name: "Block pallet" },
          { id: 1, name: "Stringer pallet" }
        ];
        self.countries = [];
        self.dateOptions = {
          formatYear: "yy",
          maxDate: new Date(2020, 5, 22),
          minDate: new Date(),
          startingDay: 1
        };
        self.pickers = {
          pickup: false,
          delivery: false
        };
        self.loader = true;
        self.slider = {
          minValue: 0,
          maxValue: 24,
          options: {
            floor: 0,
            ceil: 24,
            step: 0.5
          }
        };

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
