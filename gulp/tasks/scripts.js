const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', cb => {
  webpack(require('../../webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    cb();
  });
});
