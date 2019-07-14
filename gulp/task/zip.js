var gulp = require('gulp');
var zip = require('gulp-zip');

const Createzip = () =>
    gulp.src('dist/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('dist'));

module.exports = Createzip;