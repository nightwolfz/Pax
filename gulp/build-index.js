'use strict';

var gulp = require('gulp');
var fsSync = require('fs-sync');
var connect = require('gulp-connect');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('build-index', function () {
  fsSync.copy(paths.html.indexTemplate, paths.html.index, {force: true});

  if (utils.isDevelopment) {
    var warningMsg =
      '<!-- !!! WARNING !!! -->'
      + utils.endOfLine
      + '<!-- AUTO GENERATED FILE. ANY CHANGES WILL BE LOST ! -->'
      + utils.endOfLine
      + utils.endOfLine;

    fsSync.write(
      paths.html.index,
      warningMsg + fsSync.read(paths.html.index) + warningMsg,
      {encoding: 'utf8'});

    return gulp.start('livereload');
  } else {
    return;
  }
});
