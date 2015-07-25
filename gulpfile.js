var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var source = './src/*.js';
var output = 'bit.js';

gulp.task('build', function() {
  return gulp.src(source)
    .pipe(concat(output))
    .pipe(gulp.dest('./build/'))
    .pipe(rename(output.replace('.js', '.min.js')))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('watchers', function () {
  gulp.watch(source, ['build']);
});

gulp.task('default', ['build', 'watchers']);