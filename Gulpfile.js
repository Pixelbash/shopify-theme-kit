'use strict';

var source     = require('vinyl-source-stream');
var gulp       = require('gulp');
var less       = require('gulp-less');
var changed    = require('gulp-changed');
var watch      = require('gulp-watch');
var rename     = require('gulp-rename');
var uglify     = require('gulp-uglify');
var uglifycss  = require('gulp-uglifycss');
var concat     = require('gulp-concat');

var babelify   = require('babelify');
var uglifyify  = require('uglifyify');
var browserify = require('browserify');

var gulpShopify = require('gulp-shopify-upload');

var config = require('./config');
 

 //Shopify vars
 var shop = {
  api_key:  config.shopify.api_key,
  password: config.shopify.pass,
  url:      config.shopify.url
 }

gulp.task('js', function () {
  browserify({
    entries : './_src/assets/js/src/init.js'
  })
  .transform(babelify)
  .transform('debowerify')
  .transform('deamdify')
  .transform('uglifyify')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./_src/assets/js/dist')); 
});

gulp.task('bower', function() {
  return gulp.src([
    './_src/assets/js/lib/jquery/dist/jquery.js',
    './_src/assets/js/lib/modernizr/modernizr.js'
  ], { base: './js/lib' })
  .pipe(concat('plugins.js'))
  .pipe(uglify())
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest('./_src/assets/js/dist'))
});
 
gulp.task('less', function () {
  //Less
  gulp.src(['./_src/assets/less/style.less'])
  .pipe(less())
  .pipe(uglifycss())
  .pipe(gulp.dest('./_src/assets/css'));

  //Shopify now wants scss for it's checkout edit
  gulp.src(['./_src/assets/less/checkout.less'])
  .pipe(less())
  .pipe(uglifycss())
  .pipe(rename('checkout.scss'))
  .pipe(gulp.dest('./_src/assets/css'));
});

gulp.task('move_files', function(){
  //Update assets
  gulp.src([
    './_src/assets/fnt/**',
    './_src/assets/img/**',
    './_src/assets/css/**.css',
    './_src/assets/css/**.scss',
    './_src/assets/js/lib/**.js',
    './_src/assets/js/dist/**.js'])
  .pipe(rename({dirname: ''}))
  .pipe(changed('./assets'))
  .pipe(gulp.dest('./assets'))
  .pipe(gulpShopify(shop.api_key, shop.password, shop.url, shop.theme_id));


  gulp.src('./_src/config/**').pipe(changed('./config')).pipe(gulp.dest('./config')).pipe(gulpShopify(shop.api_key, shop.password, shop.url, shop.theme_id));
  gulp.src('./_src/layout/**').pipe(changed('./layout')).pipe(gulp.dest('./layout')).pipe(gulpShopify(shop.api_key, shop.password, shop.url, shop.theme_id));
  gulp.src('./_src/snippets/**').pipe(changed('./snippets')).pipe(gulp.dest('./snippets')).pipe(gulpShopify(shop.api_key, shop.password, shop.url, shop.theme_id));
  gulp.src('./_src/templates/**').pipe(changed('./templates')).pipe(gulp.dest('./templates')).pipe(gulpShopify(shop.api_key, shop.password, shop.url, shop.theme_id));

});

gulp.task('watch', function(){
  console.log('started watch');
  gulp.watch(['./_src/assets/js/src/**'], ['js']).on('error', swallowError);
  gulp.watch(['./_src/assets/js/lib/**'], ['bower']).on('error', swallowError);
  gulp.watch(['./_src/assets/less/**'],   ['less']).on('error', swallowError);

  gulp.start('move_files');
  gulp.watch([
    './_src/assets/**',
    './_src/config/**',
    './_src/layout/**',
    './_src/snippets/**',
    './_src/templates/**',
    ], ['move_files'])
      .on('error', swallowError);
});  

// Default gulp action when gulp is run
gulp.task('default', [
   'watch'
]);

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}