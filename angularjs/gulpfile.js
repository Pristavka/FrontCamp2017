// Various helper modules
var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var ngAnnotate = require('gulp-ng-annotate')();

var source = ['app/**/*.js', 'vendor/**/*.*'];

gulp.task('webserver', () => {
  return gulp
    .src('app') // root
    .pipe(
      plug.webserver({
        livereload: true, // liveReload
        directoryListing: true,
        open: 'http://localhost:8000/index.html' // index.html
      })
    );
});

gulp.task('ngAnnotate', () => {
  return gulp
    .src(source)
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});

// The default task is 'webserver'
gulp.task('default', ['webserver']);
