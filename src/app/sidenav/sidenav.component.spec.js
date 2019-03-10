describe("Component: sidenav", function() {
  beforeEach(module("quicargo"));
  var controller;
  var scope;
  var mockItems = [
    {
      link: "dashboard",
      title: "New Delivery",
      disabled: false
    }
  ];

  describe("SidenavController", function() {
    beforeEach(inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController("sidenav", { $scope: scope });
    }));

    it("should have property 'navItems' defined", function() {
      expect(controller.navItems).toBeDefined();
      expect(controller.navItems.length).toBe(3);
    });

    it("should have property 'collapsed' false", function() {
      expect(controller.collapsed).toBeDefined();
      expect(controller.collapsed).toBe(false);
    });
  });
});
