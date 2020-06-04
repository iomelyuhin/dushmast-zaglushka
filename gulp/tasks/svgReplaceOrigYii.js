const gulp = require("gulp");
const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");
const cheerio = require("gulp-cheerio");
const replace = require("gulp-replace");

module.exports = function svgFeatures() {
  return gulp
    .src("src/assets/img/icons/orig/*.svg")
    .pipe(gulp.dest("../yii-eva-dev/web/assets/img/icons/"));
};
