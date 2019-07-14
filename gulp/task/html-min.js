var gulp = require('gulp'),
  injectPartials = require('gulp-inject-partials'),
  browserSync = require('browser-sync').create(),
  htmlmin = require('gulp-htmlmin');

const html = () =>
  gulp.src('src/*.html')
  .pipe(htmlmin({
    removeEmptyAttributes: true,
    removeTagWhitespace: true
  }))
  .pipe(injectPartials())
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}));

module.exports = html