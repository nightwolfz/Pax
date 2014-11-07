'use strict';

var gutil = require('gulp-util');
var colors = require('colors');
var isDevelopment = gutil.env.dev;

exports.endOfLine = require('os').EOL;

exports.isDevelopment = isDevelopment;

exports.ifDevelopment = function (fn) {
  return isDevelopment ? fn() : gutil.noop();
};

exports.trimHtmlPath = function (path) {
  return path.replace(/.*(?=app[\\\/])/, '');
};

exports.trimCssPath = function (path) {
  return path.replace(/.*(?=sass[\\\/])/, '');
};

exports.trimJsPath = function (path) {
  return path.replace(/.*(?=js[\\\/])/, '');
};

exports.trimTestPath = function (path) {
  return path.replace(/.*(?=(js|test)[\\\/])/, '');
};

exports.normalizePath = function (path) {
  return path.replace(/\\/g, '/');
};

exports.logError = function (msg) {
  console.error(msg.red);
};

exports.logSuccess = function (msg) {
  console.log(msg.green);
};

exports.logWatchEvent = function (path, type, action) {
  console.log('[watcher] File %s was %s, %s...', path, type, action);
};

exports.logTaskError = function (err) {
  // Makes custom errors more uniform.
  // Could be combined with gulp-util or npm colors for nicer output.
  var errorMsg = '[' + err.plugin + ']';
  errorMsg += ' ' + err.message.replace('\n', '');

  if (err.fileName) {
    errorMsg += ' in ' + err.fileName;
  }

  if (err.lineNumber) {
    errorMsg += ' on line ' + err.lineNumber;
  }

  console.error(errorMsg.red);
};
