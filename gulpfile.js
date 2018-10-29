var gulp = require('gulp');
var prettify = require('gulp-jsbeautifier');
const minify = require('gulp-minify');
var log = require('fancy-log');

gulp.task('default', function() {

});

gulp.task('prettify', function() {
   
gulp.src(['./src/**/*.html', './src/js/**/*.js', '!./src/js/libs/', '!./src/js/libs/**'])
  .pipe(prettify())
  .pipe(prettify.reporter())
  .pipe(gulp.dest(function (file) {
        return file.base;
   }));
}); 


 
gulp.task('compress', function() {
  gulp.src(['./src/**/*.html', './src/js/**/*.js', '!./src/js/libs/', '!./src/js/libs/**'])
    .pipe(minify({
        
         ignoreFiles: ['-min.js']
        
  }))
    .pipe(gulp.dest(function (file) {
        log(file);
        return file.base;
   }));
});
    

