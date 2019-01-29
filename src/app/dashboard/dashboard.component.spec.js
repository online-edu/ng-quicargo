describe("Component: dashboard", function() {
  beforeEach(module("quicargo"));
  var controller;
  var scope;

  describe("DashboardController", function() {
    beforeEach(inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController("dashboard", { $scope: scope });
    }));

    it("should have property 'pickers & loader' defined", function() {
      expect(controller.pickers).toBeDefined();
      expect(controller.pickers.pickup).toBe(false);
      expect(controller.loader).toBeDefined();
      expect(controller.loader).toBe(true);
    });

    it("should contain Paper from all goods ", function() {
      expect(controller.goods).toBeDefined();
      expect(controller.goods).toContain("Paper");
    });

    it("should have sliders options available", function() {
      expect(controller.pickupSlider).toBeDefined();
      expect(controller.deliverySlider).toBeDefined();
    });

    it("should update good's value to Plastic", function() {
      controller.onGoodsClick("Plastic");
      expect(controller.freightGood).toEqual("Plastic");
    });
  });
});
