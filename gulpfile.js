let gulp = require('gulp');
let server = require('gulp-express');
let sass = require('gulp-sass');

const WATCH_TO_RESTART = [
  'controllers/**/*.js',
  'models/**/*.js',
  'routes/**/*.js'
];

const WATCH_TO_RELOAD = [
  'views/**/*.jade',
  'public/**/*.css'
];

gulp.task('sass', function () {
  return gulp.src('assets/stylesheets/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('server', () => {
  server.run(['bin/www']);
  gulp.watch(WATCH_TO_RESTART, (event) => {
    server.run();
    server.notify(event);
  });
  gulp.watch(WATCH_TO_RELOAD, server.notify)
  gulp.watch('assets/stylesheets/**/*.sass', ['sass']);
});


gulp.task('default', ['sass','server']);