let gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	webpack = require('webpack-stream'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	csso = require('gulp-csso'),
	babel = require('babel-preset-env');

gulp.task('sass', function(){
	return gulp.src('./src/sass/**/*.scss')
			.pipe(sass())
			.pipe(autoprefixer())
			.pipe(csso())
			.pipe(gulp.dest('./build'))
});

// gulp.task('concate', function(){
// 	return gulp.src('./src/js/**/*.js')
// 			.pipe(concat('distribution.js'))
// 			.pipe(uglify())
// 			.pipe(gulp.dest('./build/js'))
// });

gulp.task('sync', function(){
	browserSync.init({
		server: {
			baseDir: './build/'
		}
	});

	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['concate']);
	gulp.watch('./build/css/**/*.css').on('change', browserSync.reload);
	gulp.watch('./build/*.html').on('change', browserSync.reload);
});