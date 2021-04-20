const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const webpHTML = require('gulp-webp-html')
const replace = require("gulp-replace");

module.exports = function pug2html() {
  return (
    gulp
      .src("src/views/pages/**/*.pug")
      .pipe(plumber())
      .pipe(pug())
			.pipe(webpHTML())
      .pipe(replace("&gt;", ">"))
      .pipe(replace("&lt;", "<"))
      .pipe(gulp.dest("build"))
  );
};
