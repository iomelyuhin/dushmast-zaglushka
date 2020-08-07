const gulp = require("gulp");

module.exports = function fontsYii() {
  return gulp
    .src("src/assets/fonts/*")
    .pipe(gulp.dest("../yii/web/assets/fonts"));
};
