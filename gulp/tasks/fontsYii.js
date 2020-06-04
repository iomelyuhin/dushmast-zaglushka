const gulp = require("gulp");

module.exports = function fontsYii() {
  return gulp
    .src("src/assets/fonts/*")
    .pipe(gulp.dest("../yii-eva-dev/web/assets/fonts"));
};
