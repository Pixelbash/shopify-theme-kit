'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import changed from 'gulp-changed';
import bower from 'gulp-bower';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import watch from 'gulp-watch';
import image from 'gulp-image-optimization';
import gulpShopify from 'gulp-shopify-upload';


import browserSync from 'browser-sync';

import source from 'vinyl-source-stream';
import babelify from 'babelify';
import browserify from 'browserify';
import rimraf from 'rimraf';

import Config from './config';
var config = new Config();
var paths  = config.paths;
var shopify  = config.shopify;

gulp.task('browser-sync', function () {
  browserSync(config.browsersync);
});

var task_names = ['img','fnt', 'locales','scss','es6','bower','snippets','templates','layout','config'];
var copy_tasks = ['fnt', 'locales','snippets','templates','layout','config'];

gulp.task('clean', function(){
  console.log(config.paths['img']);
  for(var task_name of task_names) {
    rimraf(config.paths[task_name]['dest']);
  }
});

gulp.task("img", () => {
  return gulp.src(paths.img.src)
    .pipe(changed("dist/img"))
    .pipe(image({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(paths.img.dest));
});

gulp.task('scss', () => {
  return gulp.src(paths.scss.src)
    .pipe(sass({indentedSyntax:false}).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('init.css'))
    .pipe(gulp.dest(paths.scss.dest));
});

gulp.task('bower', () => {
  return gulp.src(paths.bower.src
  , { base: './js/lib' })
  .pipe(concat('plugins.js'))
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest(paths.bower.dest))
});

gulp.task('es6', () => {
    return browserify({entries: paths.es6.src, extensions: ['.es6'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('init.js'))
    .pipe(gulp.dest(paths.es6.dest));
});

for(var task_name of copy_tasks) {
  gulp.task(task_name, () => {
    return gulp.src(paths[task_name].src)
      .pipe(gulp.dest(paths[task_name].dest));
  });
}

gulp.task('shopify_watch', () => {
  return watch(paths.shopify.src)
  .pipe(gulpShopify(shopify.api_key, shopify.pass, shopify.url, shopify.theme_id, {
      "basePath" : 'dist'
    }));
});

gulp.task('watch', () => {
  for(var task_name of task_names) {
    gulp.watch([paths[task_name].watch],[task_name]);
  }
  gulp.start('shopify_watch');
});

gulp.task('default', () => {
  gulp.start('watch');
});
