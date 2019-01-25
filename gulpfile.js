const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const cssnano = require("gulp-cssnano");
const jshint = require("gulp-jshint");
const templateCache = require("gulp-angular-templatecache");

const modules = "./node_modules";
var development = false;

const styles = [`${modules}/bootstrap/dist/css/bootstrap.min.css`];

const scripts = [
  `${modules}/angular/angular.min.js`,
  `${modules}/angular-route/angular-route.min.js`,
  // `${modules}/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js`,
  "./src/app/**/*.js"
];

gulp.task("sass", () =>
  gulp
    .src("./src/**/**/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat("quicargo.css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);

gulp.task("css", () =>
  gulp
    .src(styles)
    .pipe(concat("main.css"))
    .pipe(gulp.dest("./dist/css"))
);

gulp.task("js", () =>
  gulp
    .src(scripts)
    .pipe(concat("quicargo.js"))
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest("./dist/js"))
);

gulp.task("lint", () =>
  gulp
    .src("./src/app/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish", { verbose: true }))
);

gulp.task("html", () =>
  gulp
    .src(["./src/app/**/*.html", "./src/**/*.html"])
    .pipe(gulp.dest("./dist/"))
);

gulp.task("ng", () =>
  gulp
    .src("./src/app/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(
      templateCache("templates.js", {
        module: "quicargo",
        root: ""
      })
    )
    .pipe(gulp.dest("dist"))
);
gulp.task("assets", () =>
  gulp.src("./src/assets/*.png").pipe(gulp.dest("./dist/"))
);

gulp.task(
  "build",
  gulp.series(["css", "sass", "js", "ng", "html", "assets"]),
  () => {}
);

gulp.task("browser-sync", () => {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: "./dist"
    },
    reloadDelay: 1000,
    injectChanges: true,
    notify: true
  });
});

gulp.task("serve", gulp.series(["build", "browser-sync"]), () => {
  gulp.watch("./src/app/**/*.scss", ["sass"]);  
});
