var gulp = require('gulp');
var beautify = require('gulp-jsbeautifier');

const Formatter = () =>
    gulp.src(['dist/**/*.html'])
    .pipe(beautify())
    .pipe(gulp.dest('dist'));

module.exports = Formatter;