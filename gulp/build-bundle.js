'use strict';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var byteDiff = require('gulp-bytediff');
var minifyCss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-bundle', function () {
  if (utils.isDevelopment) return;

  return gulp.src(paths.html.index)
    .pipe(usemin({
      css: [
        'concat',
        byteDiff.start(),
        minifyCss({keepSpecialComments: 0}),
        byteDiff.stop(),
        rev()
      ],
      js: [
        'concat',
        ngAnnotate(),
        byteDiff.start(),
        uglify(),
        byteDiff.stop(),
        rev()
      ]
    }))
    .pipe(gulp.dest(paths.html.src));
});
