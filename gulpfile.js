const gulp = require('gulp');
const server = require('gulp-express');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha');


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

gulp.task('set_dev_env', () => {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set_test_env', () => {
  return process.env.NODE_ENV = 'test';
});

gulp.task('utests', ['set_test_env'], () => {
  return gulp.src(['spec/factories/*.js','spec/spec_helper.js','spec/models/**/*.js','spec/controllers/**/*.js'])
    .pipe(mocha({
      reporter: 'spec',
      ui: 'bdd'
    }))
    .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
});

gulp.task('itests', ['set_test_env'], () => {
  return gulp.src(['spec/factories/*.js','spec/spec_helper.js', 'spec/features/**/*.js'])
    .pipe(mocha({
      reporter: 'spec',
      timeout: 10000
    }))
    .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
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


gulp.task('default', ['sass', 'set_dev_env', 'server']);