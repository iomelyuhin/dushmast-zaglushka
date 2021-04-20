const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const replace = require("gulp-replace");

module.exports = function pug2htmlYii() {
  return (
    gulp
      .src("src/views/pages/blog/*.pug")
      .pipe(plumber())
      .pipe(pug())
      .pipe(replace("&gt;", ">"))
      .pipe(replace("&lt;", "<"))
      .pipe(gulp.dest("../yii/views/build/blog"))
  );
};
