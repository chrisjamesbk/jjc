'use strict';

var gulp     = require('gulp');
var config   = require('../../config').optimize.images;

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
