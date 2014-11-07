'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-sass', function () {
  return gulp.src(paths.sass.main)
    .pipe(plumber({
      errorHandler: utils.logTaskError
    }))
    .pipe(sass({
      sourcemap: utils.isDevelopment,
      sourcemapPath: paths.sass.sourcemapPath
    }))
    .pipe(gulp.dest(paths.build.src))
    .pipe(utils.ifDevelopment(connect.reload));
});
