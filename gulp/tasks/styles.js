const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssvars = require('postcss-simple-vars');
const postnested = require('postcss-nested');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');

gulp.task('styles', () => {
  return gulp
    .src('./app/assets/styles/styles.scss')
    .pipe(postcss([cssImport, mixins, postnested, cssvars, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./app/temp/styles'));
});
