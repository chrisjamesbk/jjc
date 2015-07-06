'use strict';

var gulp      = require('gulp');
var config    = require('../../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
