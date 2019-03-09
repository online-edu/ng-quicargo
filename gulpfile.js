const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const template = require("gulp-template");
const environments = require("gulp-environments");
const uuidv1 = require("uuid/v1");
const source = require("./source");
const del = require("del");

const uuid = uuidv1();
const production = environments.production;
let jsFileName = `quicargo_${uuid}.js`,
  cssFileName = `quicargo_${uuid}.css`;

gulp.task("sass", () =>
  gulp
    .src(source.styles)
    .pipe(sass())
    .pipe(production(cssnano()))
    .pipe(concat(cssFileName))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);

gulp.task("js", () =>
  gulp
    .src(source.scripts)
    .pipe(concat(jsFileName))
    .pipe(production(uglify()))
    .pipe(production(minify()))
    .pipe(gulp.dest("./dist/js"))
);

gulp.task("html", () => {
  gulp
    .src(source.views.src)
    .pipe(production(htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest("./dist/"));

  return gulp
    .src(source.views.app)
    .pipe(production(htmlmin({ collapseWhitespace: true })))
    .pipe(rename({ dirname: "" }))
    .pipe(gulp.dest("./dist/partials/"));
});

gulp.task("inject", () =>
  gulp
    .src("./dist/index.html")
    .pipe(template({ js: `./js/${jsFileName}`, css: `./css/${cssFileName}` }))
    .pipe(gulp.dest("dist"))
);

gulp.task("assets", () =>
  gulp.src(source.assets).pipe(gulp.dest("./dist/assets"))
);

gulp.task("clean", () => del("./dist/**/*"));

gulp.task(
  "build",
  gulp.series(["clean", "html", "sass", "js", "assets", "inject"]),
  () => {}
);

gulp.task("browser-sync", () => {
  browserSync.init({
    open: true,
    watch: true,
    https: true,
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch("./src/**/*.scss", gulp.series("sass"));
  gulp.watch("./src/**/*.js", gulp.series("js"));
  gulp.watch("./src/**/*.html", gulp.series(["html", "inject"]));
});

gulp.task("serve", gulp.series(["build", "browser-sync"]), () => {});
