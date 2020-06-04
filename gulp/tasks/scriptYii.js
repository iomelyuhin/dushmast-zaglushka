const gulp = require("gulp");
const eslint = require("gulp-eslint");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

module.exports = function scriptYii() {
  return (
    gulp
      .src("src/assets/js/*.js")
      // .pipe(eslint())
      // .pipe(eslint.format())
      .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      .pipe(terser())
      .pipe(sourcemaps.write())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("../yii-eva-dev/web/assets/js"))
  );
};
