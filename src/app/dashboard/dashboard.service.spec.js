describe("Dashboard service", function() {
  var dashboardService;
  var countries = [];

  beforeEach(angular.mock.module("quicargo"));

  beforeEach(inject(function(_dashboardService_) {
    dashboardService = _dashboardService_;
  }));

  it("should exist", function() {
    expect(dashboardService).toBeDefined();
  });

  describe("getCountries()", function() {
    it("should exist", function() {
      expect(dashboardService.getCountries).toBeDefined();
    });
  });
});
