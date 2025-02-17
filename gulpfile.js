const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

// Importação dinâmica do gulp-imagemin
async function loadImagemin() {
  const imagemin = (await import("gulp-imagemin")).default;
  return imagemin;
}

function scripts() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"));
}

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/styles/"));
}

async function image() {
  const imagemin = await loadImagemin();
  return gulp
    .src("./src/images/**/*", { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images/"));
}

exports.default = gulp.parallel(styles, image, scripts);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
};
