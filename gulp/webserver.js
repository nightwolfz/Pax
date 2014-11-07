'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var paths = require('./config').paths;

gulp.task('webserver', function () {
  return connect.server({
    root: paths.app.relative,
    livereload: true
  });
});
