var gulp = require('gulp'),
		gutil = require('gulp-util'),
		sass = require("gulp-sass"),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		uglify = require('gulp-uglify'),

		sassOptions = {
  		errLogToConsole: true,
  		outputStyle: 'expanded'
		};

gulp.task('sass', function(){
	return gulp.src('source/scss/**/*.scss')
		// find all .scss files from the css folder
		.pipe(sourcemaps.init())
		//run Sass on those files
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(uglify())
		// rewrite the resulting CSS in the output folder
		.pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('build-js', function(){
	return gulp.src('source/javascript/**/*.js')
		.pipe(sourcemaps.init())
			.pipe(concat('bundle.js'))
			.pipe(uglify())
			.on('error', createErrorHandler('uglify'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('watch', function(){
	return gulp
		//Watch the input folder for change and run sass task when something happens
		.watch('source/scss/**/*.scss', ['sass'])
		.watch('sources/javascript/**/*.js', ['build-js'])
});

gulp.task('default', ['sass', 'build-js', 'watch']);