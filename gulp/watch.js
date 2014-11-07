'use strict';

var gulp = require('gulp');
var utils = require('./utils');
var paths = require('./config').paths;

gulp.task('watch', function () {
  gulp.watch(paths.html.indexTemplate, ['build-index'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimHtmlPath(file.path), file.type, 'generating index.html');
    });

  gulp.watch(paths.html.files, ['livereload'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimHtmlPath(file.path), file.type, 'reloading');
    });

  gulp.watch(paths.js.files, ['livereload', 'js-hint'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimJsPath(file.path), file.type, 'reloading + js hinting');
    });

  gulp.watch(paths.sass.files, ['build-sass'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimCssPath(file.path), file.type, 'compiling');
    });

  gulp.watch(paths.tests.unit.filesToWatch, ['run-unit-tests'])
    .on('change', function (file) {
      utils.logWatchEvent(utils.trimTestPath(file.path), file.type, 'running tests');
    });
});
