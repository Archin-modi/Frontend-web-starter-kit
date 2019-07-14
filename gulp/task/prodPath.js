var gulp = require("gulp");
var replace = require('gulp-replace-path');
var path = require('path');

const prodpath = () => gulp.src(['dist/*.html'])
    .pipe(replace('images/', 'assets/images/'))
    .pipe(replace('css/', 'assets/css/'))
    .pipe(replace('js/', 'assets/js/'))
    .pipe(gulp.dest('dist'));

module.exports = prodpath;