var gulp = require("gulp"),
    shell = require('gulp-shell');

const clean = shell.task([
    'rm -rf dist'
]);

module.exports = clean;