const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

gulp.task('deleteDistFolder', () => {
  return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
  return gulp
    .src([
      './app/assets/images/**/*',
      '!./app/assets/images/icons',
      '!./app/assets/images/icons/**/*',
    ])
    .pipe(
      imageMin({
        progress: true,
        interlace: true,
        multipass: true,
      }),
    )
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder'], () => {
  return gulp
    .src('./app/index.html')
    .pipe(
      usemin({
        css: [() => rev(), () => cssnano()],
        js: [() => rev(), () => uglify()],
      }),
    )
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
