// Karma configuration
// Generated on Sun Jan 27 2019 23:57:06 GMT+0530 (IST)

module.exports = function(config) {
  const modules = "./node_modules";
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      `${modules}/angular/angular.min.js`,
      `${modules}/angular-route/angular-route.min.js`,
      `${modules}/angular-animate/angular-animate.min.js`,
      `${modules}/angular-touch/angular-touch.min.js`,
      `${modules}/angular-mocks/angular-mocks.js`,
      `${modules}/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js`,
      `${modules}/angularjs-slider/dist/rzslider.min.js`,
      "./src/app/**/*.js",
      "./src/app/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["spec"],

    coverageReporter: {
      dir: "./report/coverage",
      reporters: [{ type: "html", subdir: "report-html" }]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
