const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const uuidv1 = require("uuid/v1");
const source = require("./source");
const template = require("gulp-template");

const uuid = uuidv1();
let jsFileName = `quicargo_${uuid}.js`,
  cssFileName = `quicargo_${uuid}.css`;

gulp.task("sass", () =>
  gulp
    .src(source.styles)
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat(cssFileName))
    .pipe(gulp.dest("./dist/css"))
);

gulp.task("js", () =>
  gulp
    .src(source.scripts)
    .pipe(concat(jsFileName))
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest("./dist/js"))
);

gulp.task("html", () => {
  gulp
    .src(source.views.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist/"));

  return gulp
    .src(source.views.app)
    .pipe(htmlmin({ collapseWhitespace: true }))
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

gulp.task(
  "build",
  gulp.series(["html", "sass", "js", "assets", "inject"]),
  () => {}
);

gulp.task("browser-sync", () => {
  browserSync.init({
    open: true,
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task("serve", gulp.series(["build", "browser-sync"]), () => {});
