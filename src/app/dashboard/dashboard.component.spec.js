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
  });
});
