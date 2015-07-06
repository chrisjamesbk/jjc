'use strict';

var gulp    = require('gulp');
var replace = require('gulp-replace');
var config  = require('../../config').replace.images;

/**
 * Replace image paths in html files
 */
gulp.task('replace:images', function() {
  gulp.src(config.src)
    .pipe(replace(config.origString, config.newString))
    .pipe(gulp.dest(config.dest));
});
