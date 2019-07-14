var gulp = require("gulp");
var w3cjs = require('gulp-w3cjs');

const w3c = () => gulp.src('dist/*.html')
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());

module.exports = w3c;