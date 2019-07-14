var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browser=require("./../browser-sync")

const devJs = () => gulp.src('src/js/**/*.js')
    .pipe(uglify({
        compress: true
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browser.reload({
        stream: true
    }));

const Js = () => gulp.src('src/js/**/*.js')
    .pipe(uglify({
        compress: true
    }))
    .pipe(gulp.dest('dist/assets/js'))


module.exports = {
    Js,
    devJs
};