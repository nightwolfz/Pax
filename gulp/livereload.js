'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var utils = require('./utils');

gulp.task('livereload', function () {
  return gulp.src('')
    .pipe(utils.ifDevelopment(connect.reload));
});
