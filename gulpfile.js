var gulp = require('gulp'),
		sass = require("gulp-sass"),
		autoprefixer = require('gulp-autoprefixer'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		cmq    = require('gulp-combine-mq'),
		gutil = require('gulp-util'),
		sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
	return gulp.src('./src/scss/*.scss')
		// find all .scss files from the css folder
		.pipe(sourcemaps.init())
		//run Sass on those files
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(cmq())
		.pipe(gulp.dest('./public/assets/stylesheets'))
		.pipe(uglify())
		// rewrite the resulting CSS in the output folder
		.pipe(gulp.dest('./public/assets/stylesheets'));
});

gulp.task('build-js', function(){
	gulp.src('./src/javascript/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./public/assets/javascript'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/assets/javascript'));
});

gulp.task('watch', function(){
		//Watch the input folder for change and run sass task when something happens
		gulp.watch('src/scss/*.scss', ['sass'])
		.on('change', function(evt) {
		    console.log(evt.type, " ==> ", evt.path);
		});
		gulp.watch('src/javascript/*.js', ['build-js'])
		.on('change', function(evt) {
		    console.log(evt.type, " ==> ", evt.path);
		});
});

gulp.task('default', ['sass', 'build-js']);