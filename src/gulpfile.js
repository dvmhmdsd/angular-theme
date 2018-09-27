var gulp = require('gulp'),
    image = require('gulp-image'),
    auto = require('autoprefixer'),
    post = require('gulp-postcss');

var pug = require('gulp-pug');
var sass = require('gulp-sass');

// Compile pug files into HTML
gulp.task('pug', function () {
  return gulp.src('./app/**/*.pug')
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./app'));
});

// Compile sass files into CSS
gulp.task('sass', function () {
  return gulp.src('./app/**/*.scss')
    .pipe(sass({
      includePaths: ['./app/'],
      errLogToConsole: true,
      outputStyle: 'nested',
    }))
    .pipe(gulp.dest('./app'));
});

// Serve and watch sass/pug files for changes
gulp.task('watch', ['pug', 'sass'], function () {
  gulp.watch('./app/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.pug', ['pug']);
});

gulp.task('default', ['watch']);