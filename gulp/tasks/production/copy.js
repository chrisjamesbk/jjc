'use strict';

var gulp = require('gulp');
var downloads = require('../../config').copy.downloads;

gulp.task('copy:build', function () {
  return gulp.src(downloads.src)
    .pipe(gulp.dest(downloads.dest));
});
