var gulp=require("gulp");
var purify = require('gulp-purifycss');
var browser=require("./../browser-sync");

const CleanCss = () =>
    gulp.src('dist/**/*.css')
    .pipe(purify(['dist/**/*.js', 'dist/**/*.html']))
    .pipe(gulp.dest('dist'))
    .pipe(browser.reload({
        stream: true
    }));


module.exports = CleanCss;