const gulp = require('gulp')
const imagemin = require('gulp-imagemin')


module.exports = function copyImages() {
  return gulp.src([
    'src/assets/img/content/*.{gif,png,jpg,svg,webp}',
    'src/assets/img/icons/flags/*.{gif,png,jpg,svg,webp}'
  ])
    .pipe(gulp.dest('build/assets/img/content/'))
}

