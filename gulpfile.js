var gulp = require('gulp'),
watch = require('gulp-watch'),
postCss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  console.log('Default task is starting ...');
});

gulp.task('html', function() {
  console.log('Something was changed in HTML');
});

gulp.task('styles', function() {
  gulp.src('./app/assets/**/*.css')
  .pipe(postCss([autoprefixer]]))
  .pipe(gulp.dest('./temp/'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/**/*.css', function() {
    gulp.start('styles');
  });
});
