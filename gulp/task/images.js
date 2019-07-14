var gulp = require('gulp');
var image = require('gulp-image');
var browser=require("./../browser-sync");

const devOptimizeImages = () => gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('dist/images'))
    .pipe(browser.reload({
        stream: true
    }));

const OptimizeImages = () => gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('dist/assets/images'));

module.exports = {
    OptimizeImages,
    devOptimizeImages
};