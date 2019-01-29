describe("Dashboard service", function() {
  var dashboardService;

  beforeEach(angular.mock.module("quicargo"));

  beforeEach(inject(function(_dashboardService_) {
    dashboardService = _dashboardService_;
  }));

  it("should exist", function() {
    expect(dashboardService).toBeDefined();
  });

  it("should return date options", function() {
    var tempDateOpts = {
      formatYear: "yy",
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    var dateOptions = dashboardService.getDateOptions();
    expect(dateOptions).toEqual(tempDateOpts);
  });

  it("should return times in 'hh:mm'", function() {
    var tempTime = {
      from: "8:30",
      to: "7:30"
    };
    var hours = dashboardService.getTimes({ minValue: "8.5", maxValue: "7.5" });
    expect(hours).toEqual(tempTime);
  });

  it("should return volume types  more than one", function() {
    var volumeTypes = dashboardService.getVolumeTypes();
    expect(volumeTypes.length).toBeGreaterThanOrEqual(1);
  });

  it("should return countries ", function() {
    dashboardService.getCountries().then(function(data) {
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(10);
    });
  });

  it("should contain Netherlands in countries ", function() {
    var netherlands = {
      name: "Netherlands",
      id: "NL"
    };
    dashboardService.getCountries().then(function(data) {
      expect(data).toContain(netherlands);
    });
  });

  it("should return slider options ", function() {
    var sliderOptions = dashboardService.getSliderOptions();
    expect(sliderOptions).toBeTruthy();
  });
});
