// if you want run write 'gulp watch' in console.

"use strict";

// Load plugins
var gulp = require("gulp"),
sass = require("gulp-sass"),
concat = require('gulp-concat'),
 minifyCSS = require('gulp-minify-css'),
 uglify = require('gulp-uglify');

// CSS task
function css() {
  return gulp
    .src(
      [
        "./assets/css/bootstrap.min.css",
        "./assets/css/layout.scss"
      ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('beyn-min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/public/css'));
}



// Watch files
function watchFiles() {
  gulp.watch("./assets/css/**/*", css);
}

// define complex tasks
const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.watch = watch;