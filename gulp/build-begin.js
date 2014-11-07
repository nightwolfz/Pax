'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var paths = require('./config').paths;

gulp.task('build-begin', function () {
  return gulp.src(paths.build.src, {read: false})
    .pipe(rimraf());
});
