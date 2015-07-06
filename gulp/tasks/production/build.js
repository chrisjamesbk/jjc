'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete',
  'jekyll:production',
  'replace:images',
  [
    'scripts',
    'images'
  ],
  'sass',
  [
    'optimize:css',
    'optimize:js',
    'optimize:images'
  ],
  callback);
});
