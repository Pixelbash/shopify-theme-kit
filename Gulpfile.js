'use strict';
var gulp        = require('gulp');
var less        = require('gulp-less');
var changed     = require('gulp-changed');
var watch       = require('gulp-watch');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var uglifycss   = require('gulp-uglifycss');

var gulpIgnore  = require('gulp-ignore');
var gulpShopify = require('gulp-shopify-upload');
 
var babelify   = require('babelify');
var uglifyify  = require('uglifyify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var mainBowerFiles = require('main-bower-files');
var concat         = require('gulp-concat');

var config = require('./config');

 //Shopify vars
 var shop = {
    api_key: config.shopify.api_key,
    password: config.shopify.pass,
    url: config.shopify.url
 }

gulp.task('js', function () {
  browserify({
    entries : './assets/js/src/init.js'
  })
  .transform(babelify)
  .transform('debowerify')
  .transform('deamdify')
  //.transform('uglifyify')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./assets/js/dist')); 
});

gulp.task('js_libs', function() {
    return gulp.src(mainBowerFiles(), { base: './js/lib' })
    .pipe(gulpIgnore.include('*.js'))
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./assets/js/dist'))
});
 
gulp.task('less', function () {
  //Less
  gulp.src(['./assets/less/style.less','./assets/less/checkout.less'])
  .pipe(less())
  .pipe(uglifycss())
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('changed', function() {
  gulp.src([
    './assets/fnt/**',
    './assets/img/**',
    './assets/css/**.css',
    './assets/js/dist/**.js'])
  .pipe(rename({dirname: ''}))
  .pipe(changed('./shop/assets'))
  .pipe(gulp.dest('./shop/assets'))

  gulp.src('./config/**').pipe(changed('./shop/config')).pipe(gulp.dest('./shop/config'));
  gulp.src('./layout/**').pipe(changed('./shop/layout')).pipe(gulp.dest('./shop/layout'));
  gulp.src('./snippets/**').pipe(changed('./shop/snippets')).pipe(gulp.dest('./shop/snippets'));
  gulp.src('./templates/**').pipe(changed('./shop/templates')).pipe(gulp.dest('./shop/templates'));
});

gulp.task('shopifywatch', function(){
  return watch(['./shop/'])
    .pipe(gulpShopify(shop.api_key, shop.password, shop.url,'9083535'));
})

//Watch
gulp.task('watch', function(){
  console.log('started watch')
  gulp.watch(['./assets/js/src/**'], ['js']);
  gulp.watch(['./assets/js/lib/**'], ['js_libs']);
  gulp.watch(['./assets/less/**'], ['less']);
  gulp.watch(['./+(assets|layout|config|snippets|templates|locales)/**'], ['changed']);
  gulp.start('shopifywatch');
});  

//Default
gulp.task('default', function() {
  gulp.start('js', 'less');
});