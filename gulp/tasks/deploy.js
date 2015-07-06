'use strict';

var gulp   = require('gulp');
var deploy = require('gulp-gh-pages');
var config = require('../config').deploy;

/**
 * Start rsync task
 */
gulp.task('deploy', ['build:production'], function () {
  return gulp.src(config.src + '/**/*')
    .pipe(deploy());
});
