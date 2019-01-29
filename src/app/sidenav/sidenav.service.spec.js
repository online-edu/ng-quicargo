describe("Sidenav service", function() {
  var sidenavService;

  beforeEach(angular.mock.module("quicargo"));

  beforeEach(inject(function(_sidenavService_) {
    sidenavService = _sidenavService_;
  }));

  it("should exist", function() {
    expect(sidenavService).toBeDefined();
  });

  it("should return nav items", function() {
    var navItems = sidenavService.getNavItems();
    expect(navItems.length).toBeGreaterThanOrEqual(1);
  });

  it("should contain dashboard in nav items", function() {
    var dashboard = {
      link: "dashboard",
      title: "New Delivery",
      disabled: false
    };
    var navItems = sidenavService.getNavItems();
    expect(navItems).toContain(dashboard);
  });
});
