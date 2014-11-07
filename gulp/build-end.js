'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var fs = require('fs');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-end', ['sourcemap-fix'], function () {
  if (utils.isDevelopment) return;

  return gulp.src(paths.build.css, {read: false})
    .pipe(rimraf());
});

gulp.task('sourcemap-fix', function () {
  // The sourcemap file produced by sass doesn't contain the correct
  // paths to the original sass files. This function fixes that.
  // More info about issue at https://github.com/sindresorhus/gulp-ruby-sass/issues/49
  if (!utils.isDevelopment) return;

  var path = utils.normalizePath(__dirname);
  var pathInfo = path.split('/');
  pathInfo.shift();
  pathInfo.pop();
  var pathToRemove = '/' + paths.sass.src + '/' + pathInfo.join('/') + '/' + paths.app.src;

  return fs.readFile(paths.build.cssMap, 'utf8', function (err, data) {
    if (err) return utils.logError(err);
    var res = data.replace(new RegExp(pathToRemove, 'g'), '');

    fs.writeFile(paths.build.cssMap, res, 'utf8', function (err) {
      if (err) return utils.logError(err);
    });
  });
});
