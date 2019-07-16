var gulp = require("gulp");
var html = require("./gulp/task/html-min");
var browser = require('./gulp/browser-sync');
var browserSync = require('./gulp/task/browser-sync');
var sass = require("./gulp/task/sass");
var clean = require("./gulp/task/clean");
var w3c = require("./gulp/task/w3c");
var CleanCss = require("./gulp/task/uncss");
var Createzip = require("./gulp/task/zip");
var Images = require("./gulp/task/images");
var JsFile = require("./gulp/task/jsfile");
var css = require("./gulp/task/css");
var beautify=require("./gulp/task/beautifier");
var static =require("./gulp/task/static");
var Path=require("./gulp/task/prodPath");

gulp.task('dev', gulp.series(    
    static,
   // w3c,
    css.devcss,
    sass.devSass,
    JsFile.devJs,
    Images.devOptimizeImages,
    html,
    beautify,
    CleanCss,   
    browserSync
));

gulp.task('watch', function () {
    gulp.watch('src/**/*.css', css.devcss);
    gulp.watch('src/**/*.js', JsFile.devJs);
    gulp.watch('src/**/*.html', gulp.series(html,beautify));
    gulp.watch('src/images/*', Images.devOptimizeImages);
    gulp.watch('src/**/*.*').on('change', browser.reload);
    gulp.watch('src/**/*.scss', gulp.series(sass.devSass, CleanCss))
});

gulp.task('prod', gulp.series(
    clean,
    static,
    w3c,
    css.css,
    sass.Sass,
    JsFile.Js,
    Images.OptimizeImages,
    html,
    CleanCss, 
    Createzip
));

gulp.task('default', gulp.parallel(clean,'dev', 'watch'));