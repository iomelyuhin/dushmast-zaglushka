const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const shorthand = require("gulp-shorthand");
const autoprefixer = require("gulp-autoprefixer");
const pxtorem = require("gulp-pxtorem");
const sassGlob = require("gulp-sass-glob");
const rename = require("gulp-rename");

module.exports = function styles() {
  return gulp
    .src("src/assets/styles/style.scss")
    .pipe(sassGlob())
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: "*",
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(sourcemaps.write())
    .pipe(
      pxtorem({
        propList: ["*", "!*border*"],
        selectorBlackList: [/^html$/],
      })
    )
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(gulp.dest("../yii/web/assets/css"));
};
