'use strict';

var gulp    = require('gulp');
var iconify = require('gulp-iconify');
var config  = require('../../config').iconify;

/**
 * Manage icons dynamically
 */
gulp.task('iconify', function() {
  iconify(config);
});
