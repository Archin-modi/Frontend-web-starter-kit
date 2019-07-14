var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var browser=require("./../browser-sync")

const devcss = () => gulp.src('src/css/**/*.css')
    .pipe(cssnano())
    .pipe(autoprefixer({
        cascade: true
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browser.reload({
        stream: true
    }));

const css = () => gulp.src('src/css/**/*.css')
    .pipe(cssnano())
    .pipe(autoprefixer({
        cascade: true
    }))
    .pipe(gulp.dest('dist/assets/css'));

module.exports = {
    devcss,
    css
};