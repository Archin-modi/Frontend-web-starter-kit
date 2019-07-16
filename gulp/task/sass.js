var gulp = require("gulp");
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browser = require("./../browser-sync");

//compiling our SCSS files
const devSass = () =>
    gulp.src('src/scss/*.scss')
    //prevent pipe breaking caused by errors from gulp plugins      
    //get sourceMaps ready
    .pipe(sourceMaps.init())
    //include SCSS and list every "include" folder
    .pipe(sass({
        errLogToConsole: true,
        includePaths: [
            'src/scss/'
        ]
    }))
    .pipe(autoprefixer({
        cascade: true
    }))
    //get our sources via sourceMaps
    .pipe(sourceMaps.write())
    //where to save our final, compressed css file
    .pipe(gulp.dest('dist/assets/css'))
    //notify browserSync to refresh
    .pipe(browser.reload({
        stream: true
    }));

//compiling our SCSS files
const Sass = () =>
    gulp.src('src/scss/*.scss')
    //prevent pipe breaking caused by errors from gulp plugins      
    //get sourceMaps ready
    .pipe(sourceMaps.init())
    //include SCSS and list every "include" folder
    .pipe(sass({
        errLogToConsole: true,
        includePaths: [
            'src/scss/'
        ],
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        cascade: true
    }))
    //get our sources via sourceMaps
    .pipe(sourceMaps.write())
    //where to save our final, compressed css file
    .pipe(gulp.dest('dist/assets/css'))
    //notify browserSync to refresh
    .pipe(browser.reload({
        stream: true
    }));

module.exports = {
    Sass,
    devSass
}