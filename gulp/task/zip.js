var gulp = require('gulp');
var zip = require('gulp-zip');

const Createzip = () =>
    gulp.src('dist/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('dist/export'));

module.exports = Createzip;