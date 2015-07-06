'use strict';

var gulp   = require('gulp');
var config = require('../../config').optimize.js;

/**
 * Copy JS files
 */
gulp.task('optimize:js', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
