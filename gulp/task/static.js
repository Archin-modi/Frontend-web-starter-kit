var gulp=require("gulp");

const static = () =>
    gulp.src([
        'src/manifest.json'
    ])    
    .pipe(gulp.dest('dist'))   


module.exports = static;