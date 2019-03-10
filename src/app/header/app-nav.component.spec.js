describe("Component: appNav", function() {
  beforeEach(module("quicargo"));
  var controller;
  var scope;

  describe("HeaderController", function() {
    beforeEach(inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController(
        "appNav",
        { $scope: scope },
        { user: "Andy Simpson" }
      );
    }));

    it("should have binding 'user' bound", function() {
      expect(controller.user).toBeDefined();
      expect(controller.user).toBe("Andy Simpson");
    });
  });
});
